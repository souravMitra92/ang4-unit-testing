import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
  });

  it('should get github user profile', inject([HttpTestingController, GithubService], (
    httpMock: HttpTestingController,
    gitService: GithubService
  ) => {
    const mockData = {
      login: 'souravMitra92',
      id: 10111358,
      avatar_url: 'https://avatars3.githubusercontent.com/u/10111358?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/souravMitra92',
      html_url: 'https://github.com/souravMitra92',
      followers_url: 'https://api.github.com/users/souravMitra92/followers',
      following_url: 'https://api.github.com/users/souravMitra92/following{/other_user}',
      gists_url: 'https://api.github.com/users/souravMitra92/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/souravMitra92/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/souravMitra92/subscriptions',
      organizations_url: 'https://api.github.com/users/souravMitra92/orgs',
      repos_url: 'https://api.github.com/users/souravMitra92/repos',
      events_url: 'https://api.github.com/users/souravMitra92/events{/privacy}',
      received_events_url: 'https://api.github.com/users/souravMitra92/received_events',
      type: 'User',
      site_admin: false,
      name: null,
      company: null,
      blog: '',
      location: null,
      email: null,
      hireable: null,
      bio: null,
      public_repos: 4,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '2014-12-08T03:43:33Z',
      updated_at: '2018-03-26T05:28:43Z'
    };

    gitService.getData('souravmitra92').subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Response:
          console.log(event.body);
          expect(event.body.public_repos).toEqual(3);
      }
    });
    const mockReq = httpMock.expectOne(gitService.url + 'souravmitra92');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(mockData);
    httpMock.verify();
  }
  )
  );
});
