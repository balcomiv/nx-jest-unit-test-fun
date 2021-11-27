// jest.mock('@angular/common/http');

// const mockHttpClient = HttpClient as jest.MockedClass<typeof HttpClient>;
// const mockHttpClient = mocked(HttpClient, true);
// const httpClient = new HttpClient({} as HttpHandler);

// const exampleService = new ExampleService(
//   mockHttpClient as unknown as HttpClient
// );

// test('the service should map the return value to an array of companies', () => {
//     httpClient.get.mockReturnValueOnce(Observable.of({companies:[{name:'C1',code:'C1'}],page:6,total:51}))

//     exampleService.getPage(6)
//     .subscribe((value)=>expect(value).toEqual([{name:'C1',code:'C1'}]));
//   expect(httpClient.get.mock.calls[0][0]).toEqual('backendUrl/companies?page=6')
// });

// https://stackoverflow.com/questions/52457575/jest-typescript-property-mock-does-not-exist-on-type
// it('should be mocked', () => {
//   expect(http.get.mock).toBeTruthy();
// });

// https://jestjs.io/docs/es6-class-mocks
