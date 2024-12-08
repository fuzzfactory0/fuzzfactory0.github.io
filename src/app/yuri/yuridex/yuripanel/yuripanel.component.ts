import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FullSeries } from '../../entities/yuriClass';
import { Category } from '../../entities/categories';

@Component({
    selector: 'app-yuripanel',
    templateUrl: './yuripanel.component.html',
    styleUrls: ['./yuripanel.component.scss'],
    standalone: false
})
export class YuripanelComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.manga = this.data.getSeries(id)!;
  }

  manga: FullSeries;
  
  ngOnInit(): void {
  }

  getCover(): string {
    return this.manga.anilistData.coverImage.extraLarge;
  }

  getTitle(): string {
    if (this.manga.forceJapanese || !this.manga.anilistData.title.english) {
      return this.manga.anilistData.title.romaji;
    } else {
      return this.manga.anilistData.title.english;
    }
  }

  getFavico(url: string) {
    const websites = ['mangadex', 'dynasty', 'kodansha', 'inkr', 'viz', 'sevenseas', 'yenpress', 'bookwalker', 'amazon', 'denpa', 'mangaplus'];
    for (let site of websites) {
      if (url.includes(site)) {
        return site;
      }
    }
    return '';
  }
  
  getLabel(site: string) {
    if (site.includes('mangadex.org')) {
      return 'Mangadex';
    }
    if (site.includes('dynasty-scans')) {
      return 'DynastyScans';
    }
    return 'Official EN'
  }

  goToCategory(category: Category) {
    this.router.navigateByUrl('yuri#category-'+category.id);
  }
}
