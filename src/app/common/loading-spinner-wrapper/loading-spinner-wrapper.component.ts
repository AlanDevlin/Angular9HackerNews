import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'loading-spinner-wrapper',
  template: `
    <div class="loading-spinner-wrapper">
      <div class="loader-message" *ngIf="isLoading">
        <i class="fas fa-circle-notch fa-spin  fa-3x"></i>
        <div *ngIf="message && message.length > 0"><strong>{{message}}</strong></div>
      </div>
      <div class="loader-content" [ngClass]="{ 'loading': isLoading }">
        <ng-content></ng-content>
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
export class LoadingSpinnerWrapperComponent implements OnInit {

  @Input('is-loading')
  public isLoading: boolean;
  @Input('loader-message')
  public message: string;
 
  constructor(
  ) { }

  ngOnInit() {
  }
}