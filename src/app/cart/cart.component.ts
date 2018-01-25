import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  premiumAccount=true;
  public recentMovie="None";
  public cart = JSON.parse(localStorage.getItem('cartItems'));
 
  constructor() { }

  ngOnInit() {
  }

}
