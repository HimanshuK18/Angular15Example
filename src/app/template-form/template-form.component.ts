import { Component, OnInit } from '@angular/core';
import { User} from './user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new User(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  constructor() {}
  
  ngOnInit() {
    console.log();
  }

  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new User(42, '', '');
  }

}
