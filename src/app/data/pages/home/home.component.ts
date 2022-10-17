import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
