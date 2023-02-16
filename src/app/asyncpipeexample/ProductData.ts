import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './Product';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    //BehaviorSubject is a type of Subject that emits a default or last emitted value. 
    //We are using BehaviorSubject to emit the default Products array initially.
    Products$: BehaviorSubject<IProduct[]>;
    Products: IProduct[] = [
        {
            Id: "1",
            Title: "Pen",
            Price: 100,
            inStock: true
        },
        {
            Id: "2",
            Title: "Pencil",
            Price: 200,
            inStock: false
        },
        {
            Id: "3",
            Title: "Book",
            Price: 500,
            inStock: true
        }
    ]

    constructor() {
        this.Products$ = new BehaviorSubject<IProduct[]>(this.Products);
    }
    AddProduct(p: IProduct): void {
        this.Products.push(p);
        //emitting the updated Products array.
        this.Products$.next(this.Products);
    }
}