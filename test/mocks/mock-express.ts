import { Request } from "express";

function mockExpress(request: Partial<Request> | typeof jest.fn = jest.fn()) {
  jest.mock("express", () => {
    const actualModule = jest.requireActual("express");

    const send = jest.fn();
    const json = jest.fn();
    const status = jest.fn(() => ({ send, json }));

    return {
      ...actualModule,
      Request: request,
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
