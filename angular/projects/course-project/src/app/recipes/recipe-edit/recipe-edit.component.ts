import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'recipe-edit',
    templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent {
	id: number;
	editMode = false;
	recipeForm: FormGroup;

	constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

	ngOnInit() {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
					this.editMode = params['id'] !== undefined;
					this.initForm();
				}
			);
	}

	private initForm() {
		let recipeName = '';
		let imagePath = '';
		let description = '';
		let ingredients = new FormArray([]);
		if (this.editMode) {
			const recipe = this.recipeService.getRecipe(this.id);
			recipeName = recipe.name;
			imagePath = recipe.imagePath;
			description = recipe.description;
			if (recipe['ingredients']) {
				for (let ingredient of recipe.ingredients) {
					ingredients.push(
						new FormGroup({
							'name': new FormControl(ingredient.name, Validators.required),
							'amount': new FormControl(ingredient.amount, [ 
								Validators.required, 
								Validators.pattern(/^[1-9]+[0-9]*$/) 
							])
						})
					);
				}
			}			
		}		
		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName, Validators.required),
			'imagePath': new FormControl(imagePath, Validators.required),
			'description': new FormControl(description, Validators.required),
			'ingredients': ingredients
		});
	}

	onAddIngredient() {
		(<FormArray>this.recipeForm.get('ingredients')).push(
			new FormGroup({
				'name': new FormControl(null, Validators.required),
				'amount': new FormControl(null, [ 
					Validators.required, 
					Validators.pattern(/^[1-9]+[0-9]*$/) 
				])
			})
		);
	}

	onSubmit() {
		if (this.editMode) {
			this.recipeService.updateRecipe(this.id, this.recipeForm.value);
		} else {
			this.recipeService.addRecipe(this.recipeForm.value);
		}
		this.router.navigate(['../'], { relativeTo: this.route });
	}

	onCancel() {
		this.router.navigate(['../'], { relativeTo: this.route });
	}

	onDeleteIngredient(index: number) {
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
	}
}