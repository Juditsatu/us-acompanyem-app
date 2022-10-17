import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [` 
  svg{

    width:30px;
  }

  .btn-logout{
    position:fixed;
    right:20px;
    top:20px;
    background-color:white;
    padding:15px;
    border-radius:50px;
    z-index:2000



  }


  
  `
  ]
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
