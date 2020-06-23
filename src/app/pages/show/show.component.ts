import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PagingInfo } from 'src/app/shared/models/pagination/paging-info';
import { NewsItem } from 'src/app/shared/models/news-item.model';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public items: NewsItem[];
  public pagination: PagingInfo;
public pageSize = 10;
public page = 1;
public isLoadingStories: boolean;

  constructor(private _hackerNewsAPIService: HackernewsApiService) { }

  ngOnInit(): void {
    this.getShowStories();
  }

  private getShowStories(){
    this.isLoadingStories = true;
    this._hackerNewsAPIService.getShowStories()
    .pipe(finalize(() => this.isLoadingStories = false ))
    .subscribe( result => {
      this.items = result;
      this.pagination = new PagingInfo();
      this.pagination.totalItems = this.items.length;
      this.pagination.totalPages = this.pagination.totalItems/this.pageSize;
      this.pagination.currentPage = this.page;
      this.pagination.itemsPerPage = this.pageSize;
    },
      error => console.log('Error returning show stories')
      );
  }

  public onPageChangedEvent(page: number): void {
    this.page = page;
  }

}
