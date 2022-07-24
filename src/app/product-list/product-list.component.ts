import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  constructor(private productService:ProductService) { }
  
  private _listCart!:string;
  pageTitle:string="Product List"
  imageWidth:number=50;
  imageMargin:number=50;
  showImage!:boolean;
  filteredProducts:IProduct[]=[];
  products: IProduct[]=[];
  sub!:Subscription;

  ngOnInit(): void {
    this._listCart='';
    this.sub= this.productService.getProducts().subscribe({
      next:products=>{
        this.products=products;
        // this.filteredProducts=this.products;
      },
      error:err=>console.log("error",err)
    });
    console.log("in OnInit",this.filteredProducts)
  } 
  
  get listCart():string{
    this.performFilter(this._listCart);
    return this._listCart
  }

  set listCart(value:string){
    this._listCart=value;   
  }
  toggleButton(){
    this.showImage=!this.showImage;
  }
  performFilter(filterby:string){
    filterby=filterby.toLowerCase();
    this.filteredProducts= this.products.filter((product:IProduct)=>
      product.productName.toLowerCase().includes(filterby)
    )
  }
  onRatingClicked(message:string){
    this.pageTitle=this.pageTitle+" "+ message
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
