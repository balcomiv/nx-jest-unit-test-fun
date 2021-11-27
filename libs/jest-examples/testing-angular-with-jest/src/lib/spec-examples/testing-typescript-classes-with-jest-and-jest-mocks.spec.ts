// https://www.jonathancreamer.com/testing-typescript-classes-with-jest-and-jest-mocks/

export interface ICommunicator<T> {
  send: (item: T) => void;
}

export interface IEmail {
  to: string;
  from: string;
  subject: string;
  contents: string;
}

export class EmailService implements ICommunicator<IEmail> {
  sender: ICommunicator<IEmail>;

  constructor(sender: ICommunicator<IEmail>) {
    this.sender = sender;
  }

  send(item: IEmail) {
    this.sender.send(item);
  }
}

export class Email implements IEmail {
  to: string;
  from: string;
  subject: string;
  contents: string;

  constructor(to: string, from: string, subject: string, contents: string) {
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.contents = contents;
  }
}

describe('EmailService', () => {
  it('should send emails', () => {
    const Mock = jest.fn<ICommunicator<IEmail>, []>(() => ({
      // const Mock = jest.fn<EmailService, []>(() => ({
      send: jest.fn(),
    }));

    const mock = new Mock();
    const instance = new EmailService(mock);

    instance.send(
      new Email('to@foo.com', 'from@foo.com', 'oh hai', 'Some foo email...')
    );

    expect(mock.send).toHaveBeenCalled();
  });

  it('should also send emails', () => {
    const Mock = jest.fn<EmailService, []>(
      () =>
        ({
          // const Mock = jest.fn<EmailService, []>(() => ({
          send: jest.fn(),
        } as unknown as EmailService)
    );

    const mock = new Mock();
    const instance = new EmailService(mock);

    instance.send(
      new Email('to@foo.com', 'from@foo.com', 'oh hai', 'Some foo email...')
    );

    expect(mock.send).toHaveBeenCalled();
  });
});
