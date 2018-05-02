import { Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
	ingredientChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	updateIngredient(index: number, ingredient: Ingredient) {
		this.ingredients[index] = ingredient;
		this.ingredientChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index: number) {
		this.ingredients.splice(index, 1);
		this.ingredientChanged.next(this.ingredients.slice());
	}
}