import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'recipe-edit',
    templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent {
	id: number;
	editMode = false;
	recipeForm: FormGroup;

	constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

	ngOnInit() {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
					this.editMode = params['id'] !== null;
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
							'name': new FormControl(ingredient.name),
							'amount': new FormControl(ingredient.amount)
						})
					);
				}
			}			
		}		
		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName),
			'imagePath': new FormControl(imagePath),
			'description': new FormControl(description),
			'ingredients': ingredients
		});
	}

	onAddIngredient() {
		(<FormArray>this.recipeForm.get('ingredients')).push(
			new FormGroup({
				'name': new FormControl(),
				'amount': new FormControl()
			})
		);
	}

	onSubmit() {

	}
}