import { Component, OnInit, Input } from '@angular/core';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { NewsItem } from 'src/app/shared/models/news-item.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() idItem: number;
  public item : NewsItem;
  
  constructor(private _hackerNewsAPIService: HackernewsApiService) { }

  ngOnInit(): void {
    this.getNewsItem();
  }

  private getNewsItem(){
    this._hackerNewsAPIService.getItem(this.idItem).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load news item' + this.idItem));
  }
  
}
