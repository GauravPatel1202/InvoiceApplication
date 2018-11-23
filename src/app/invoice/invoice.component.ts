import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  item:any;
  itemObject:Object;
  dataForm:Object;
  Invoice:any;
  date:any;
  Duedate:any;
  subTotal:any;
  texRate:any;
  totalAmount:any;
  amountPaid:any;
  balanceDue:any;
  InvoiceAddress:any;
  RecipientAddress:any;
  texAmount:any;
  myControl = new FormControl;
  constructor() {

   }

  ngOnInit() {
  	let d = new Date();
  	this.Invoice=0;
    this.date=d.toLocaleDateString();
    this.Duedate=d.toLocaleDateString();
   this.subTotal=0;
  this.texRate=0;
  this.totalAmount=0;
  this.amountPaid=0;
  this.balanceDue=0;
  this.InvoiceAddress="";
  this.RecipientAddress="";
  this.item=[
  {
  		'id':1,
  		"Item":'Name of Item',
  		"Rate":"0",
  		"Quantity":"1",
  	}
  ]
  

  }
  addItem(){
  	this.item.push({
  		'id': this.item.length,
  		"Item":'Name of Item',
  		"Rate":"0",
  		"Quantity":"1",
  	});
  	this.InvoiceCulc('' ,'' ,'')
   console.log(this.item)
  }
  removeItem(data){
  	this.item.splice(data, 1)
  	this.InvoiceCulc('' ,'' ,'')

  }
  InvoiceCulc(filed, data,id){
  	if(!!filed&&!!data){
  	this.item[id][filed]=data;
  	}
  	if(this.item.length>1){
  	this.subTotal= this.item.reduce(function(previousValue, currentValue) {
  			return  previousValue+  currentValue.Rate* currentValue.Quantity;
  },0);
  	
  }else if(this.item.length==1){
     this.subTotal=this.item[0].Rate*this.item[0].Quantity
    
  }
  this.texAmount=this.subTotal*(this.texRate/100)
  this.totalAmount=this.subTotal+this.texAmount
  this.balanceDue=this.totalAmount-this.amountPaid
  console.log(this.item)

  }
  onValueUpdate(e,i){
  	console.log(e,i)

  }
  printInvoice(forms){
    forms.control.touched=true;
  	if(forms.invalid){
     alert("Please enter Valid data")
     return true
  	}
  	window.print()
  }
  
}
