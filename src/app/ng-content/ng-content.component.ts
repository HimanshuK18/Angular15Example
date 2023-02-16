import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {
  imagePath = '../../../images/small-tree-icon-7690.jpg';
  title = "Ng Content";
  ngOnInit(): void {
    console.log('i am here');
  }
 

}
