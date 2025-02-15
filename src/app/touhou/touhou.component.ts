import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-touhou',
    templateUrl: './touhou.component.html',
    styleUrls: ['./touhou.component.scss'],
    standalone: false
})
export class TouhouComponent implements OnInit {

  constructor(private router: Router, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Touhou things');
  }

}
