import { Component, OnInit,SimpleChanges, OnChanges, DoCheck, 
    AfterContentInit,  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [ProductDetailsComponent]
})

export class ProductsComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges(changes: SimpleChanges) : void{
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log("1. ngOnChanges called from parent.");
 }

 ngOnInit(): void {
  console.log("2. ngOnInit called from parent.");
}
  
 ngDoCheck(): void {
  console.log("3. doCheck is called from parent.") ;
 }

 ngAfterContentInit(): void{
  console.log("4. afterCcontent init from parent.");
 }

 ngAfterContentChecked(): void{
  console.log("5. ngAfterContentChecked from parent.");
 }

 ngAfterViewInit(): void{
  console.log("6. ngAfterViewInit from parent.");
 }

 ngAfterViewChecked(): void{
  console.log("7. ngAfterViewChecked from parent.");
 }

 ngOnDestroy(): void{
  console.log("8. ngOnDestroy from parent.");
 }

  messageFromNestedComponent = '';       
   onGetLocalSalesReport(message:any) : void {           
      this.messageFromNestedComponent = 'Product Details Report: ' + message; 
      this.products[0].AvilableQty = 1909;      
 }    
  
  products : any[] =[ {  
      "ProductID" :1,  
      "ProductName": "Solid State Drive",  
      "CategoryId":100,
      "AvilableQty":50,
      "ReorderQty":30,
      "SalesRating":4.5  
    },  
    {  
      "ProductID" : 2,  
      "ProductName": "Monitor",  
      "CategoryId":101,
      "AvilableQty":20,
      "ReorderQty":10,
      "SalesRating":4  
    },  
    {  
      "ProductID" : 3,  
      "ProductName" : "LED Display Monitor",  
      "CategoryId":100,
      "AvilableQty":5,
      "ReorderQty":10,
      "SalesRating":3.5
    }, 
    {  
      "ProductID" : 4,  
      "ProductName": "San Disk 64 GB Pen Drive",  
      "CategoryId":105,
      "AvilableQty":35,
      "ReorderQty":80,
      "SalesRating":4
    }, 
    {  
      "ProductID" : 5,  
      "ProductName": "Think Pad Ultra Dock",  
      "CategoryId":105,
      "AvilableQty":25,
      "ReorderQty":20,
      "SalesRating":4.5 
    }  
  ]
}
