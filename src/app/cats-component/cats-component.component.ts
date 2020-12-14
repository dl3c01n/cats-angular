import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats-component',
  templateUrl: './cats-component.component.html',
  styleUrls: ['./cats-component.component.scss']
})
export class CatsComponentComponent implements OnInit {

  cats = [
    {name: 'Rufus', couleur: 'rouge', age: 4},
    {name: 'Gilles', couleur: 'boir', age: 6},
    {name: 'Bernard', couleur: 'blanc', age: 1},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  miauler = (cat) => {
    alert(cat.name + ' miaule !!')
  }

}
