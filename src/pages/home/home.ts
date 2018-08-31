import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm:FormGroup;


  constructor(public navCtrl: NavController,private fb:FormBuilder) {
    this.myForm = fb.group({
      rad: ['rust'],
      name:['',Validators.required]
    });
  }
  setType(vehicle){
    this.myForm.controls['rad'].setValue(vehicle)
  }

}
