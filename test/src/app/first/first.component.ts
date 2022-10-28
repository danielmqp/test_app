import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  edad: number;
  names: Array<string>;
  name_to_add: string;

  constructor() {
    this.edad = 25;
    this.names = [];
    this.name_to_add = '';
  }

  //Similar al hook create() de Vue
  ngOnInit(): void {
    console.log('Componente first cargado');
    this.edad >= 18
      ? console.log('Eres mayor de edad')
      : console.log('eres menor de edad');

    // if (this.edad > 18) console.log('Eres mayor de edad');
    // else console.log('Eres menor de edad :(');
  }

  aumentarEdad() {
    this.edad++;
  }
  disminuirEdad() {
    this.edad--;
  }
  addName() {
    this.names.push(this.name_to_add);
  }
}
