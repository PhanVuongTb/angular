import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  componentName: string = "Product Component";
  isStatus: boolean = false;
  productName: string = ""
  productLits: {id: number, name: string, price: number, status: boolean}[]= [
    {id: 1, name: "Products A", price: 200, status:true},
    {id: 2, name: "Products B", price: 300, status:false},
    {id: 3, name: "Products C", price: 400, status:true}
  ]
  constructor() { }

  ngOnInit(): void {
  };
  onHandleClick(){
    console.log("1")
    this.isStatus=! this.isStatus
  }
  onXoa(id: number){
    this.productLits = this.productLits.filter(product => product.id !== id)
  }
  OnChange(){
    
  }

}
