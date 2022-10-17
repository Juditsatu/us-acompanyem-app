import { Component, OnInit } from '@angular/core';
import { BarriService } from '../../services/barri.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    li{
      list-style:none;
    }


    ul>li{
      padding:20px;
    }

    .rango1{
      background-color: #dd1e39
    }
    .rango2{
      background-color: #d84341
    }
    .rango3{
      background-color: #e34e44
    }
    .rango4{
      background-color: #ed8055
    }
    .rango5{
      background-color: #f3a365
    }
    .rango6{
      background-color: #f6b56d
    }
    
    a:link, a:visited, a:active {
    text-decoration:none;
    }

    a{
      color:white;
      size:1.6;
    }
  
  `]
})
export class HomeComponent implements OnInit {


  arrayPobreza:any;



  

  constructor( private barriService:BarriService) { }

  ngOnInit(): void {
    
  }

  rango(rango:number){

    const barris =   this.barriService.barris;

    barris.forEach(barri => {
      if(barri.indicePobreza < rango){
        this.arrayPobreza = barri.indicePobreza;
        console.log(this.arrayPobreza);
  
      }
    })

  }

}
