import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register: Register= new Register();
error: any={};
  constructor() { }

  ngOnInit(): void {
  }
registerSubmit(){
  console.log('registerSubmit')
  console.log(this.register)
}

}
