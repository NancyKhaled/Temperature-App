import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.css']
})
export class TempratureComponent implements OnInit {

  fahrenheit: number = 32
  celsius: number = 0


  constructor() { }

  ngOnInit(): void {
  }

}
