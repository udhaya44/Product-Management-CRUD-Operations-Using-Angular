import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent {
  pid:number = 0;
  product = new Product(0,"","",0);
  categories:string[] = ["Accessories","Home Appliances","Mobile"];
  constructor(private _activatedroute:ActivatedRoute,
              private _productservice:ProductService,
              private _router:Router)
  {
    this.pid = this._activatedroute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this._productservice.selectbyid(this.pid).subscribe((dt)=>{
      this.product = dt;
    });

  }

  update()
  {
    this._productservice.updatecode(this.pid,this.product).subscribe(()=>{
        this._router.navigate(["/"]);//redirect to home
    });
  }
}
