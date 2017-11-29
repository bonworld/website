import { Component, OnInit } from '@angular/core';
import { ELIXIR_CONSULTING_DATA } from 'app/shared/data/elixir-consulting';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'aw-phoenix-consulting',
  templateUrl: './phoenix-consulting.component.html',
  styleUrls: ['./phoenix-consulting.component.scss']
})
export class PhoenixConsultingComponent implements OnInit {
  elixir_data = ELIXIR_CONSULTING_DATA;

  constructor(private ts: Title) { }

  ngOnInit() {
    this.ts.setTitle('Expert Elixir & Phoenix Consulting and Development - AviaBird');
  }

}
