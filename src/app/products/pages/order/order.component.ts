
import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [{
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




}


