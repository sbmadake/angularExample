import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, 
      DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
    OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges, DoCheck,AfterContentInit, 
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() { }
  @Input() SalesRating:number = 3.5;  
  @Output() GetLocalSales: EventEmitter<string> = new EventEmitter<string>(); 
  _salesRating: string = 'Default'; 

  ngOnInit(): void {
    this._salesRating = 'Default';
    console.log("2. ngOnInit called from child.");
  }

  ngDoCheck(): void {
    console.log("3. do check is called from child .");
  }

  ngAfterContentInit(): void{
    console.log("4 .after content init from child");
  }

   ngAfterContentChecked(): void{
    console.log("5. ngAfterContentChecked from child.");
   }

   ngAfterViewInit(): void{
    console.log("6. ngAfterViewInit from child.");
   }
   
   ngAfterViewChecked(): void{
    console.log("7. ngAfterViewChecked from child.");
   }

   ngOnDestroy(): void{
    console.log("8. ngOnDestroy from child.");
   }

  onClick():void{  
    this.GetLocalSales.emit(`The local sales report for this product is ${this._salesRating}`);  
  } 

  ngOnChanges(changes: SimpleChanges) : void{  
    if(this.SalesRating == 3.5){  
        this._salesRating = 'Good';  
    } else if (this.SalesRating == 4.0){  
        this._salesRating = 'Very Good'  
    } else if(this.SalesRating == 4.5){  
        this._salesRating = 'Excellent'  
    } else {  
        this._salesRating = 'Undefined'  
    }

    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log("1. ngOnChanges called from child.");
 }
}
