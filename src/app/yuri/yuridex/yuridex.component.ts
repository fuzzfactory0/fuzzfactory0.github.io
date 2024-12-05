import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FullSeries } from '../entities/yuriClass';

@Component({
  selector: 'app-yuridex',
  templateUrl: './yuridex.component.html',
  styleUrls: ['./yuridex.component.scss']
})
export class YuridexComponent implements OnInit {

  constructor(private data: DataService) {
    this.series = data.getData();
    this.series.sort((a, b) => this.getTitle(a).localeCompare(this.getTitle(b)));
  }

  series: FullSeries[];

  ngOnInit(): void {
    
  }

  getCover(series: FullSeries): string {
    return series.anilistData.coverImage.large;
  }

  getTitle(series: FullSeries): string {
    if (series.forceJapanese || !series.anilistData.title.english) {
      return series.anilistData.title.romaji;
    } else {
      return series.anilistData.title.english;
    }
  }
}
