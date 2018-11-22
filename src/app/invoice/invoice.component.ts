import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  item:any;
  itemObject:Object;
  constructor() { }

  ngOnInit() {
  	this.item=[]
  	this.itemObject={
  		"Item":'Name of Item',
  		"Rate":10,
  		"Quantity":10,
  	}

  }
  addItem(){
  	this.item.push(this.itemObject)

  }

/* Prototyping
/* ========================================================================== */



}
