import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { News } from '../news/news.service.type';
import { Storage, StorageType } from './storage.type';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public storageChange$ = new Subject<Storage>();

  public getItem<T>(type: StorageType): T {
    const item = localStorage.getItem(type)!;
    return JSON.parse(item);
  }

  public setItem(type: StorageType, value: any): void {
    let newsArray: News[] = this.getItem(StorageType.NEWS);
    if (newsArray) {
      newsArray.unshift(value);
      localStorage.setItem(type, JSON.stringify(newsArray));
    } else {
      localStorage.setItem(type, JSON.stringify([value]));
    }

    this.storageChange$.next({ type, value });
  }

  public removeNews() {
    localStorage.removeItem(StorageType.NEWS);
  }
}
