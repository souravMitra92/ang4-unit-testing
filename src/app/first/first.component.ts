import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  userData: any;
  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _gitService: GithubService
  ) { }

  ngOnInit() {
    this._gitService.getData('souravmitra92').subscribe(
      (data: HttpEvent<any>) => {
        switch (data.type) {
          case HttpEventType.Sent:
            console.log('Request sent!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header received!');
            break;
          case HttpEventType.DownloadProgress:
            const kbLoaded = Math.round(data.loaded / 1024);
            console.log(`Download in progress! ${kbLoaded}Kb loaded`);
            break;
          case HttpEventType.Response:
            console.log('Done!', data.body);
            this.userData = data.body;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  gotoSecond() {
    console.log('Go to second page!!!');
    this._router.navigate(['/second']);
  }

}
