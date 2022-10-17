import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-graficas',
  templateUrl: './btn-graficas.component.html',
  styles: [`

  .btn-graficas{
    position:fixed;
    background-color:white;
    bottom:0px;
    right:0px;
    padding:30px;
    z-index:2000;
  }

  svg{
    width:50px;
  }

  a{
    font-size:1.5rem;
    margin-right:20px;
    color:black
  }



  
  
  
  `
  ]
})
export class BtnGraficasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
