import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  name: string;
  max_speed:number;
  model:string;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;
  test:string;
  title:string = 'asdx';

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.max_speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Black',
      salon: 'Grey',
      wheels: 'Red'
    };
    this.options = ['ABS', 'AutoPilot','AutoParking'];
    this.test = 'abc';
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option){
    for(let i = 0;i < this.options.length; i++) {
      if(this.options[i] == option)
      this.options.splice(i, 1);
      break;
    }

  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  carSelect(carName:string){
    if (carName == 'audi') {
    this.name = 'Audi';
    this.max_speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Black',
      salon: 'Grey',
      wheels: 'Red'
    };
    this.options = ['ABS', 'AutoPilot','AutoParking'];
    } else if (carName == 'bmw'){
      this.name = 'BMW';
      this.max_speed = 280;
      this.model = 'X5';
      this.colors = {
      car: 'Grey',
      salon: 'Green',
      wheels: 'Blue'
    };
      this.options = ['ABS', 'Cruise Сontrol','AutoParking'];

    } else {
      this.name = 'Mercedes';
      this.max_speed = 190;
      this.model = 'C-class';
      this.colors = {
      car: 'White',
      salon: 'Brown',
      wheels: 'Black'
    };
      this.options = ['Cruise Сontrol','AutoParking'];

    }
  }
}

interface Colors {
  car: string;
  salon:string;
  wheels: string;
}