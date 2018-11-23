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
  myControl = new FormControl;
  constructor() {

   }

  ngOnInit() {
  	this.dataForm={
  	"Invoice":0,
  	"date":'',
  	"Duedate":'',
  	"subTotal":0,
  	"texRate":0,
  	"totalAmount":0,
  	"amountPaid":0,
  	"balanceDue":0,
  }
  this.item=[]
  

  }
  addItem(){
  	let listObject:any={
  		'id': this.item.length,
  		"Item":'Name of Item',
  		"Rate":"0",
  		"Quantity":"1",
  	}
  	this.item.push(listObject)

  	this.InvoiceCulc()
   console.log(this.item)
  }
  removeItem(data){
  	this.item.splice(data, 1)
  	this.InvoiceCulc()

  }
  InvoiceCulc(){
  	for (var i = this.item.length - 1; i >= 0; i--) {
  		this.item[i].Rate =Number(this.item[i].Rate)
  		this.item[i].Quantity =Number(this.item[i].Quantity)
  	}
  	if(this.item.length>1){
  	this.dataForm.subTotal= this.item.reduce(function(previousValue, currentValue) {
  			return  previousValue+  currentValue.Rate* currentValue.Quantity;
  },0);
  	
  }else if(this.item.length==1){
     this.dataForm.subTotal=this.item[0].Rate*this.item[0].Quantity
    
  }
  this.texAmount=this.dataForm.subTotal*(this.dataForm.texRate/100)
  this.dataForm.totalAmount=this.dataForm.subTotal+this.texAmount
  this.dataForm.balanceDue=this.dataForm.totalAmount-this.dataForm.amountPaid

  }
  printInvoice(){
  	window.print()
  }

/* Prototyping
/* ========================================================================== */



}
