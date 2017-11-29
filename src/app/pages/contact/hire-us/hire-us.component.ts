import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aw-hire-us',
  templateUrl: './hire-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./hire-us.component.scss']
})
export class HireUsComponent implements OnInit {

  constructor(
    private ts: Title
  ) {}

  ngOnInit() {
    this.ts.setTitle('Let Us Develop Your Solution - Hire AviaBird');
  }
}
