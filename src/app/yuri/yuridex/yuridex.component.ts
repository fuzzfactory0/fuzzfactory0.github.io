import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';
import { ANTHOLOGY } from '../entities/categories';
import { TogglesService } from '../services/toggles.service';


@Component({
    selector: 'app-yuridex',
    templateUrl: './yuridex.component.html',
    styleUrls: ['./yuridex.component.scss'],
    standalone: false
})
export class YuridexComponent implements OnInit {

  constructor(private router: Router, private toggles: TogglesService, private data: DataService) {}

  lastUpdated = environment.lastUpdated;
  series =  this.data.getData().filter(s => s.anilistData.chapters != 1 && !s.categories.includes(ANTHOLOGY)).length;
  oneshots = this.data.getData().filter(s => s.anilistData.chapters == 1  || s.categories.includes(ANTHOLOGY)).reduce((acc, cur) => acc + (cur.anilistData.chapters || 0), 0);

  ngOnInit(): void {}

  toggleMenu() {
    this.toggles.toggleMenu();
  }

  isHome() {
    return /\/yuri$|\/yuri\?/.test(this.router.url);
  }

  goHome() {
    this.router.navigateByUrl('/yuri')
  }
}
