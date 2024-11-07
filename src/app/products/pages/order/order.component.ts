
import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',

})
export class OrderComponent {

  public orderBy?: keyof Hero;
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      color: Color.blue,
      canfly: true
    },
    {
      name: 'Batman',
      color: Color.black,
      canfly: false
    },
    {
      name: 'robin',
      color: Color.yellow,
      canfly: false

    },
    {
      name: 'flash',
      color: Color.red,
      canfly: false
    },
    {
      name: 'green lantern',
      color: Color.green,
      canfly: true
    },

  ]


  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }




}


