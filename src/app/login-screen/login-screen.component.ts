import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  onclick(){
    this._router.navigateByUrl('/dashboard');
  }

}
