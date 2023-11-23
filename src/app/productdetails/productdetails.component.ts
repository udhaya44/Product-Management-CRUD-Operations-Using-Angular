import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  pid:number = 0;
  product = new Product(0,"","",0);
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

  remove(){
    let ch:boolean = confirm("Are you sure to delete");
    if(ch)
    {
      this._productservice.deletecode(this.pid).subscribe(()=>{
        alert("Removed!!");
        this._router.navigate(["/"]);
      });
    }
    else{
      alert("Delete Cancelled");
    }
  }
}
