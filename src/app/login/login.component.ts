import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  data: any = {};
  masuk(data) {
    if ((data.username == 'admin') && (data.password == 'admin')) {
      this.router.navigate(['/todo']);
    }
  }
}
