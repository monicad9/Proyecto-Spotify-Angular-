import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
declare var $:any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$("footer").css("position","relative");
	}

}
