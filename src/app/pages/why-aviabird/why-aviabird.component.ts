import { Title } from '@angular/platform-browser';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { fadeInAnimation } from 'app/shared/animations';

@Component({
  selector: 'aw-why-aviabird',
  templateUrl: './why-aviabird.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./why-aviabird.component.scss']
})
export class WhyAviabirdComponent implements OnInit {
  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  constructor(private data: DataService, private ts: Title) { }

  ngOnInit() {
    this.ts.setTitle(
      'We Safely and Successfully Transition You to New Technologies - AviaBird'
    );
  }

  get services() { return this.data.services; }

}
