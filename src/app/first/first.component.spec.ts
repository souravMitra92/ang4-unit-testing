import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { FirstComponent } from './first.component';
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../services/github.service';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [

      ],
      providers: [
        HttpClientModule,
        HttpClient,
        HttpHandler,
        HttpTestingController,
        GithubService,
        {
          provide: HttpHeaders
        },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ],
      declarations: [ FirstComponent ]
    })
    .compileComponents();
  }));

  it(`should issue a request`,
  // 1. declare as async test since the HttpClient works with Observables
  async(
    // 2. inject HttpClient and HttpTestingController into the test
    inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
      // 3. send a simple request
      const headers = new HttpHeaders({ 'ENV': 'IT1' });
      http.get('https://services-sit2.cvs.com/minuteClinic/retailWebContent?apiKey=2e77f5eb-016f-44a6-8d73-d5f2e6a01a54&apiSecret=bf2a3c64-16df-4bfe-8fa9-53c24b079ea7&appName=CVS_WEB&channelName=WEB&contentId=25800&contentType=BCC&deviceToken=device1234&deviceType=DESKTOP&lineOfBusiness=RETAIL&operationName=retailWebContent&serviceCORS=False&serviceName=webContent&version=1.0', {headers, observe: 'response'}).subscribe(
        (data: HttpResponse<any>) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );

      // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
      // here two, it's significantly less boilerplate code needed to verify an expected request
      backend.expectNone({
        url: 'https://services-sit2.cvs.com/minuteClinic/retailWebContent?apiKey=2e77f5eb-016f-44a6-8d73-d5f2e6a01a54&apiSecret=bf2a3c64-16df-4bfe-8fa9-53c24b079ea7&appName=CVS_WEB&channelName=WEB&contentId=25800&contentType=BCC&deviceToken=device1234&deviceType=DESKTOP&lineOfBusiness=RETAIL&operationName=retailWebContent&serviceCORS=False&serviceName=webContent&version=1.0',
        method: 'GET'
      });
    })
  )
);

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

