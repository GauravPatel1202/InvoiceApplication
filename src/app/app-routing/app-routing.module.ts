import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
const routes: Routes = [
{ path: '', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
