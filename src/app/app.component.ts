import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  model:any = {};
  private url = "https://blowless.herokuapp.com/authen";
  

  constructor(private http:Http){

  }

  log(x)
  {
    console.log(x);
    
  }
  

  onClick()
  {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    
    this.http.get(this.url).subscribe(
      res => console.log(res.json())
    );
  }

  onValidation()
  {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url, JSON.stringify(this.model)).subscribe(res => console.log(res.json()));
  
  }

  
}
