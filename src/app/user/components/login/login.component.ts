import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login:any={};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
loginSubmit(){
  console.log("hello nikhil")
}

}
