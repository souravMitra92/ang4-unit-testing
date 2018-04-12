import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class GithubService {

  url = 'https://api.github.com/users/';
  constructor(
    private _http: HttpClient
  ) { }

  getData(id) {
    const req = new HttpRequest('GET', this.url + id, {
      reportProgress: true
    });

    return this._http.request(req);
  }
}
