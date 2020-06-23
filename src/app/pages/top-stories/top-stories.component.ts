import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { NewsItemComponent } from 'src/app/common/news-item/news-item.component';
import { NewsItem } from 'src/app/shared/models/news-item.model';
import { PaginatedList } from 'src/app/shared/models/pagination/paginated-list';
import { PagingInfo } from 'src/app/shared/models/pagination/paging-info';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  public items: NewsItem[];
  public pagination: PagingInfo;
public pageSize = 10;
public page = 1;
public isLoadingStories: boolean;

  constructor(private _hackerNewsAPIService: HackernewsApiService) { }

  ngOnInit(): void {
    this.getTopStories();
  }

  private getTopStories(){
    this.isLoadingStories = true;
    this._hackerNewsAPIService.getTopStories()
    .pipe(finalize(() => this.isLoadingStories = false ))
    .subscribe( result => {
      this.items = result;
      this.pagination = new PagingInfo();
      this.pagination.totalItems = this.items.length;
      this.pagination.totalPages = this.pagination.totalItems/this.pageSize;
      this.pagination.currentPage = this.page;
      this.pagination.itemsPerPage = this.pageSize;
    },
      error => console.log('Error returning top stories')
      );
  }

  public onPageChangedEvent(page: number): void {
    this.page = page;
  }
  

}
