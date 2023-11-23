import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  products:Product[] = [];
  constructor(private _productservice:ProductService)
  {

  }
  ngOnInit(): void {
    this._productservice.selectcode().subscribe((dt)=>{
      this.products = dt;
    });
  }


}
