import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
	selector: 'recipe-edit',
    templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent {
	id: number;
	editMode = false;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
					this.editMode = params['id'] !== null;
				}
			);
	}
}