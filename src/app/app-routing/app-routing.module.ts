import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
import { InvoiceFormComponent } from '../invoice-form/invoice-form.component';
const routes: Routes = [
{ path: '', component: InvoiceFormComponent },
{ path: 'Invoice', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
