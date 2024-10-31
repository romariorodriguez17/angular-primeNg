import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonModule } from 'primeng/button';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';





@NgModule({
  declarations: [

    MenuComponent

  ],
  imports: [
    CommonModule,
    ButtonModule,
    PrimeNgModule


  ],

  exports: [
    MenuComponent,
  ]

})
export class SharedModule { }
