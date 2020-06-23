import { OnInit, Component, Input } from '@angular/core';
import { PagingInfo } from 'src/app/shared/models/pagination/paging-info';
import { NewsItem } from 'src/app/shared/models/news-item.model';

@Component({
  selector: 'display-stories',
  template: `
  <div class="row">
  <div class="col-xs-12 w-100">
    <loading-spinner-wrapper [is-loading]= "isLoadingStories" [loader-message] = "'Loading...'">
      <ol>
      <li *ngFor="let item of items | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize" class="news-story-card">
        <app-news-item idItem="{{item}}" class="news-story"></app-news-item>
      </li>
      <ngb-pagination *ngIf="pagination && pagination.totalPages > 1" 
        class="d-flex justify-content-center pt-3"
        (pageChange) = "onPageChangedEvent($event)"
        [page]="pagination.currentPage"
        [pageSize]="pagination.itemsPerPage"
        [collectionSize]="pagination.totalItems"
        [maxSize]="5" [rotate]="true" [boundaryLinks]="true"  >
      </ngb-pagination>
    </ol>
  </loading-spinner-wrapper>
  </div>
</div>
  `,
  styles: [`
    .loading-spinner-wrapper{
        position:relative;
        display: block;
    }
    .loader-message{
        position:absolute;
        left:0;
        right:0;
        margin-left:auto;
        width:300px;
        text-align: center;
        margin-right:auto;
        z-index:5;
        top: 50%;
        transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
    }
    .loader-content{
    }
    .loader-content.loading{
        opacity: 0.6;
    }
  `]
})
export class DisplayStoryWrapperComponent implements OnInit {

    @Input()
    public pagination: PagingInfo;
    @Input()
    public items: NewsItem[];
    @Input()
    public pageSize;
    @Input()
    public page;
    @Input()
    public isLoadingStories;
 
 
  constructor(
  ) { }

  ngOnInit() {
  }

  public onPageChangedEvent(page: number): void {
    this.page = page;
  }
}