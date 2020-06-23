import { Component, OnInit } from '@angular/core';
import { NewsItem } from 'src/app/shared/models/news-item.model';
import { PagingInfo } from 'src/app/shared/models/pagination/paging-info';
import { HackernewsApiService } from 'src/app/services/hackernews-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public items: NewsItem[];
  public pagination: PagingInfo;
public pageSize = 10;
public page = 1;
public isLoadingStories: boolean;

  constructor(private _hackerNewsAPIService: HackernewsApiService) { }

  ngOnInit(): void {
    this.getJobStories();
  }

  private getJobStories(){
    this.isLoadingStories = true;
    this._hackerNewsAPIService.getJobStories()
    .pipe(finalize(() => this.isLoadingStories = false ))
    .subscribe( result => {
      this.items = result;
      this.pagination = new PagingInfo();
      this.pagination.totalItems = this.items.length;
      this.pagination.totalPages = this.pagination.totalItems/this.pageSize;
      this.pagination.currentPage = this.page;
      this.pagination.itemsPerPage = this.pageSize;
    },
      error => console.log('Error returning job stories')
      );
  }

}
