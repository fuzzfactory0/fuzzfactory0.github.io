import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FullSeries } from '../../entities/yuriClass';
import * as cat from '../../entities/categories';
import { Category } from '../../entities/categories';
import { FullCategory } from '../../entities/categories';
import { Title } from "@angular/platform-browser";
import { TogglesService } from '../../services/toggles.service';


@Component({
    selector: 'app-yurilist',
    templateUrl: './yurilist.component.html',
    styleUrl: './yurilist.component.scss',
    standalone: false
})

export class YurilistComponent implements OnInit {

    constructor(
      private data: DataService,
      private router: Router,
      private route: ActivatedRoute,
      private title: Title,
      private toggles: TogglesService
    ) {
    this.series = this.data.getData();
    this.series.sort((a, b) => this.getTitle(a).localeCompare(this.getTitle(b)));
  }

  series: FullSeries[];
  filteredSeries: FullSeries[] = [];
  categories: FullCategory[] = [];
  displayCategories: Category[] = [];
  filterMode = false;
  filterInclude: number[] = [];
  filterExclude: number[] = [];
  excludeOngoing: boolean = false;
  categoryFilter = '';

  isMobile = (window.innerWidth / window.innerHeight) <= 1;
  showMenu = false;

  ngOnInit(): void {
    this.toggles.showMenu.subscribe(value => {
      this.showMenu = value;
    });
    this.title.setTitle('YuriDex - Yuri Manga Index by a Yuri Schizo');
    this.route.fragment.subscribe(frag => {
      if (frag) {
        this.delayedScroll(frag);
      }
    });
    const categories: Category[] = Object.values(cat).sort((a, b) => a.id-b.id);
    categories.forEach(cat => {
      let series = this.series.filter(s => s.categories.some(c => c.id == cat.id));
      this.categories.push({ ...cat, series });
      this.displayCategories.push(cat);
      this.displayCategories.sort((a, b) => a.name.localeCompare(b.name));
    });
    this.filteredSeries = [...this.series];

    const snap = this.route.snapshot;
    if (snap.queryParams['include'] || snap.queryParams['exclude']) {
      this.filterInclude = snap.queryParams['include']?.split(',').map((n: string) => parseInt(n)) || [];
      this.filterExclude = snap.queryParams['exclude']?.split(',').map((n: string) => parseInt(n)) || [];
      this.filterMode = true;
      this.filterSeries();
      console.log('INIT RUN')
    }
  }

  showDetails(series: FullSeries) {
    this.router.navigate(['yuri/series/'+series.id]);
  }

  setFilter(category: Category) {
    if (this.filterInclude.includes(category.id)) {
      this.filterInclude.splice(this.filterInclude.indexOf(category.id), 1);
      this.filterExclude.push(category.id);
    } else if (this.filterExclude.includes(category.id)) {
      this.filterExclude.splice(this.filterExclude.indexOf(category.id), 1);
    } else {
      this.filterInclude.push(category.id);
    }
    this.filterSeries();
  }

  clearFilter() {
    this.filterInclude = [];
    this.filterExclude = [];
    this.filterSeries();
  }

  getIsIncluded(category: Category) {
    return this.filterInclude.includes(category.id);
  }

  getIsExcluded(category: Category) {
    return this.filterExclude.includes(category.id);
  }

  getCategoryById(id: number) {
    return this.categories.find(cat => cat.id == id)?.name;
  }

  isAnthology(manga: FullSeries) {
    return manga.categories.includes(cat.ANTHOLOGY);
  }

  isOneshot(manga: FullSeries) {
    return manga.anilistData.chapters == 1 && manga.completeTranslation;
  }

  filterSeries() {
    const queryParams: Params = {
      include: this.filterInclude.join(',') || undefined,
      exclude: this.filterExclude.join(',') || undefined
    };

    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams, 
        queryParamsHandling: 'merge',
      }
    );
    this.filteredSeries = this.series.filter(s => {
      const isIncluded = this.filterInclude.every(id => s.categories.some(c => c.id == id));
      const isExcluded = this.filterExclude.some(id => s.categories.some(c => c.id == id));
      const shouldExclude = this.excludeOngoing && !s.completeTranslation;
      return isIncluded && !isExcluded && !shouldExclude;
    });
  }

  filterCategories() {
    this.displayCategories = this.categories.filter(c => c.name.toLowerCase().includes(this.categoryFilter.toLowerCase()));
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

  delayedScroll(id: string) {
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView();
      }, 0);
    }
  }

  resetScroll() {
    const el = document.getElementById('filter-results') || document.getElementById('category-1');
    el?.scrollIntoView();
  }

  hideMenu() {
    this.toggles.menuOff();
  }
}
