import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public cart = JSON.parse(localStorage.getItem('cartItems'));
  orderform : FormGroup;


  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {
    this.orderform = this._formBuilder.group({
      firstName :['',[Validators.required]],
      middleName : [],
      lastName : ['',[Validators.required]],
      dob :['',[Validators.required]],
      address : this._formBuilder.group({
        houseNo :['',[Validators.required]],
        street :[ ],
        city :['',[Validators.required]],
        state :['',[Validators.required]],
        country :[],
        pincode :['',[Validators.required]]
      }),
      mobile :['',[Validators.required]],
      email :['',[Validators.required]]

    })
  }

  formSubmit(){
    
    alert('Your Form has been Submitted');
    //console.log(this.orderform.value);
    
  }
  

}
