import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  list: string[];

  constructor() {
    this.list=["facebook","twitter","linkedin"];
   }

  ngOnInit(): void {
  }

}
