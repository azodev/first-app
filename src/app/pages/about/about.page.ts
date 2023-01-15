import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const data = this.route.snapshot.queryParams;
    if (data?.['data']){
      console.log(JSON.parse(data['data']));
    }
  }

}
