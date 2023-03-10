import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public id = 1;
  constructor(private router:Router) {}
  redirect(){
     const data = {name: 'abc', id: this.id};
     const navData: NavigationExtras = {
      queryParams : {
        data: JSON.stringify(data)
      }
     };

    this.router.navigate(['/about'], navData);
  }
}
