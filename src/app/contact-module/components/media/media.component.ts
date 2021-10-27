import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
