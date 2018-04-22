import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
  	const ingredientName = this.nameInput.nativeElement.value;
  	const amount = this.amountInput.nativeElement.value;
  	const ingredient = new Ingredient(ingredientName, amount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
