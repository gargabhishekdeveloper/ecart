import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  premiumAccount=true;
  public recentMovie="None";
  
  public cart = [];
  
  public movieList = ['Batsman vs Superman', 'Civil War','Deadpool','Iron Man','Iron Man 2', 'Tiger Zinda hai']

  selectedMovie(movie){
    this.recentMovie = movie;
    this.cart.push(movie);
    alert(movie+' movie added to cart');
    localStorage.cartItems = JSON.stringify(this.cart)
    console.log(localStorage.cartItems);
  }


  constructor() { }

  ngOnInit() {
  }

}
