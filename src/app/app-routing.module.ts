import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaaComponent } from './aaa/aaa.component';
import { AppComponent } from './app.component';
import { BbbComponent } from './bbb/bbb.component';
import { CccComponent } from './ccc/ccc.component';
import { DialogComponent } from './dialog/dialog.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: XyzComponent,
children: [
  {
    path: 'dialog',
    component: DialogComponent
  }
] },
  { path: 'aaa', component: AaaComponent },
  { path: 'bbb', component: BbbComponent },
  { path: 'ccc', component: CccComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
