import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { CatService } from '../../service/catService';

type Article = {
  articles: any[],
  articlesCount:number
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new User(18, '', 'Super Flexible', '');
  submitted = false;
  myObservable$: Observable<String>;
  data$: Observable<Article>;
  dataP: any = "adsa";
  observable: Observable<number>


  constructor(
    private catService: CatService,
  ) {

    this.myObservable$ = new Observable((subscribe) => {
      try {
        subscribe.next('Hello');
        subscribe.next('World');
        setTimeout(() => {
          subscribe.next('4');
          subscribe.complete();
        }, 1000);
      }
      catch (err) {
        subscribe.error();
      }

    });
  }

  ngOnInit() {
    this.observable = Observable.create(observer => {
      let value = { "second": 0 };
      let seconds = 0;
      const interval = setInterval(() => {
        observer.next(value)
        value = { "second": seconds };
        seconds++;
      }, 1000)

      return () => clearInterval(interval)
    })


    console.log();
    this.identity(3);
    this.getData();
    console.log();
  }

  identity<T>(arg: T): T {
    return arg;
  }

  onSubmit() {
    this.submitted = true;
    this.myObservable$.subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error);
    }, () => {
      console.log('done');
    });
  }
  newHero() {
    this.model = new User(42, '', '');
  }

  getData() {

    this.data$ = this.catService.get();
    /* if we are not using async pipe
    let data: any;
    data = this.catService.get()
    .subscribe(data => {
      this.data = data;
    });*/

  }
}