import { Component, OnInit } from '@angular/core';
//model
import { Shows } from '../models/Shows';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
 
  shows: Shows[];

  constructor() { }

  ngOnInit() {
  
  }

    //  showDate: Date;
    // venue: string;
    // city: string;
    // doorsOpen: number;
    // ticketLink: string;
    // is21nOver: boolean;

}
