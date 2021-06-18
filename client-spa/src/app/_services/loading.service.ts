import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingRequestCount = 0;

  constructor(private _spinnerService: NgxSpinnerService) {}

  loading() {
    this.loadingRequestCount++;
    this._spinnerService.show(undefined, {
      type: 'line-scale-pulse-out',
      bdColor: 'rgba(256,256,256,0)',
      color: '#95A5A6',
      size: 'default',
    });
  }

  idle() {
    this.loadingRequestCount--;
    if (this.loadingRequestCount <= 0) {
      this.loadingRequestCount = 0;
      this._spinnerService.hide();
    }
  }
}
