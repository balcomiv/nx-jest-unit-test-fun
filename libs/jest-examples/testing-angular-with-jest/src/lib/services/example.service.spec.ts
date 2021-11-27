import { HttpClientTestingModule } from '@angular/common/http/testing'; // //medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
import { TestBed } from '@angular/core/testing';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
