import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContenteditableModule } from 'ng-contenteditable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContenteditableModule,
    // Import one or both of this modules
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
