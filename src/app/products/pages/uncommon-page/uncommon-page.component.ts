import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18selectPipe
  public name: string = 'Romario';
  public gender: 'male' | 'female' = 'male';
  public invitedMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  //i18pluralPipe
  changeClient(): void {
    this.name = 'Sara';
    this.gender = 'female';
  }

  public clients: string[] = ['Romario', 'Sara', 'Juan', 'Pedro', 'Maria', 'Luis', 'Andres'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValuePipe
  public person = {
    name: 'Romario',
    age: 30,
    address: 'santa marta',
    phone: '1234567890'
  }

  //AsyncPipe

  public myObservableTime = interval(2000)
    .pipe(
      tap(value => console.log('tap', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos la data de la promesa');
      console.log('tenemos la data de la promesa');

    }, 3500);
  });
}
