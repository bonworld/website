import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ANGULAR_CONSULTING_DATA } from 'app/shared/data/angular-consulting';

@Component({
  selector: 'aw-angular-consulting',
  templateUrl: './angular-consulting.component.html',
  styleUrls: ['./angular-consulting.component.scss']
})
export class AngularConsultingComponent implements OnInit {
  angular_data = ANGULAR_CONSULTING_DATA;

  constructor(private ts: Title) { }

  ngOnInit() {
    this.ts.setTitle('Expert Angular Consulting and Development - AviaBird');
  }

}
