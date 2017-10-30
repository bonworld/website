import { CLIENT_DATA } from './../../../shared/data/clients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-worked-with',
  templateUrl: './worked-with.component.html',
  styleUrls: ['./worked-with.component.scss']
})
export class WorkedWithComponent implements OnInit {
  clientList = CLIENT_DATA;
  marquee_reapeat = new Array(2);

  constructor() { }

  ngOnInit() {
  }

}
