import { Component, OnInit } from '@angular/core';
//service
import { Service } from '../service'
//model
import { TShirt } from '../models/TShirts'
//third party
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {
  tshirts: TShirt[];
  outOfStockMessage: string = 'Sorry we are currently out of stock';
  faSpinner = faSpinner;
  
  constructor(private service: Service) { }

  ngOnInit() {
     this.service.getAllData('tshirts')
     .subscribe(
        data => this.tshirts = data,
        err => console.log(err),
        () => console.log(this.tshirts)
      );
  }

}
