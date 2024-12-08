import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-touhou',
    templateUrl: './touhou.component.html',
    styleUrls: ['./touhou.component.scss'],
    standalone: false
})
export class TouhouComponent implements OnInit {
  title = 'Fuzz\'s dumpster';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
