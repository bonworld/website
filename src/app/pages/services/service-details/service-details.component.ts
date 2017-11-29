import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-service-details',
  templateUrl: './service-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  @Input() service;

  constructor(private data: DataService, private ts: Title) { }

  ngOnInit() {
    this.ts.setTitle(this.service.title);
  }

  get services() {
    return this.data
      .services
      .filter(service => service.name !== this.service.name);
  }

}
