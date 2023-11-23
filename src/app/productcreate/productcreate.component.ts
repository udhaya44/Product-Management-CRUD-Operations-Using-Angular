import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})

export class ProductcreateComponent {
  constructor(private _productservice:ProductService, private _router:Router)
  {

  }

  product = new Product(0,"","",0);
  categories:string[] = ["Accessories","Home Appliances","Mobile"];
  save()
  {
    this._productservice.insertcode(this.product).subscribe(()=>{
        this._router.navigate(["/"]);//redirect to home
    });
  }
}
