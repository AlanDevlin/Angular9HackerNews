import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PagingInfo } from 'src/app/shared/models/pagination/paging-info';
import { NewsItem } from 'src/app/shared/models/news-item.model';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public items: NewsItem[];
  public pagination: PagingInfo;
public pageSize = 10;
public page = 1;
public isLoadingStories: boolean;

  constructor(private _hackerNewsAPIService: HackernewsApiService) { }

  ngOnInit(): void {
    this.getNewestStories();
  }

  private getNewestStories(){
    this.isLoadingStories = true;
    this._hackerNewsAPIService.getNewestStories()
    .pipe(finalize(() => this.isLoadingStories = false ))
    .subscribe( result => {
       this.items = result;
      this.pagination = new PagingInfo();
      this.pagination.totalItems = this.items.length;
      this.pagination.totalPages = this.pagination.totalItems/this.pageSize;
      this.pagination.currentPage = this.page;
      this.pagination.itemsPerPage = this.pageSize;
    },
      error => console.log('Error returning newest stories')
      );
  }

  public onPageChangedEvent(page: number): void {
    this.page = page;
  }
}
