function mockExpress() {
  jest.mock("express", () => {
    const actualModule = jest.requireActual("express");

    const send = jest.fn();
    const json = jest.fn();
    const status = jest.fn(() => ({ send, json }));

    return {
      ...actualModule,
      Request: jest.fn(),
      Response: {
        ...actualModule.Response,
        send,
        json,
        status
      }
    }
  })

  const { Request, Response } = jest.requireMock("express");
  jest.spyOn(Response, "send")

  return { Request, Response };
}

export { mockExpress };
