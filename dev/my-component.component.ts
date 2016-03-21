import {Component} from 'angular2/core';

@Component({
	selector: 'my-component',
	template: `
		Hi I'm {{name}}. I'm so <span [class.is-awesome]="inputElement.value === 'yes'">awesome</span>!
		<br/>
		<br/>
		Am I awesome?
		<input type="text" #inputElement (keyup)="0">
	`,
	styleUrls: ['src/css/mycomponent.css']
})

export class myComponentComponent {
	name = 'Jeremy';

}