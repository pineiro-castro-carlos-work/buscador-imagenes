import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private static readonly UNSPLASH_API_URL = 'https://api.unsplash.com/';
  private static readonly UNSPLASH_SEARCH_URL = UnsplashService.UNSPLASH_API_URL + 'search/photos';
  private static readonly ACCESS_KEY = 'MpS3h1V2OcsSfrU3WYvr0qt7XKWwuanmhlUCZKiFVow'

  constructor(private http: HttpClient) { }

  search(query: string, page?: number) {
    if (!page) {
      page = 1;
    }

    return this.http.get<any>(UnsplashService.UNSPLASH_SEARCH_URL + '?page=' + page + '&query=' + query  +'&client_id=' + UnsplashService.ACCESS_KEY) ;
  }
}
