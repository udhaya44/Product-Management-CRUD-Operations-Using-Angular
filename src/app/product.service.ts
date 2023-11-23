import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl:string = "http://localhost:3000/products";
  constructor(private _httpclient:HttpClient) { }

  insertcode(product:Product)
  {
    return this._httpclient.post(this.apiurl,product);
  }

  selectcode()
  {
    return this._httpclient.get<Product[]>(this.apiurl);
  }

  selectbyid(id:number)
  {
    let t = this.apiurl+"/"+id;
    return this._httpclient.get<Product>(t);
  }

  updatecode(id:number, product:Product)
  {
    let t=this.apiurl+"/"+id;
    return this._httpclient.put(t,product);
  }

  deletecode(id:number)
  {
    let t=this.apiurl+"/"+id;
    return this._httpclient.delete(t);
  }

}
