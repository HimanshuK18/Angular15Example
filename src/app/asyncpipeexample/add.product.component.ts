import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from './Product';
import { AppService } from "./ProductData";

@Component({
    selector: 'app-list-products',
    templateUrl: './add.product.component.html',
    styleUrls: ['./add.product.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
  })
  export class ListProductsComponent implements OnInit, OnDestroy {
  
    products: IProduct[] = []
    productSubscription?: Subscription
    constructor(private appService: AppService) { }
  
    productObserver = {
      next: (data: IProduct[]) => { this.products = data; },
      error: (error: any) => { console.log(error) },
      complete: () => { console.log('product stream completed ') }
    }
    ngOnInit(): void {
      this.productSubscription = this.appService.Products$.subscribe(this.productObserver)
    }
  
    ngOnDestroy(): void {
      if (this.productSubscription) {
        this.productSubscription.unsubscribe();
      }
    }
  }