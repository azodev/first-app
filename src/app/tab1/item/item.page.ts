import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  id: string|null;
  constructor(private route: ActivatedRoute) { 
    this.id = null
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
