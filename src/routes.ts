/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
} from "tsoa";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PupuilController } from "./controller";
import * as express from "express";

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  IListRes: {
    dataType: "refObject",
    properties: {
      id: { dataType: "string", required: true },
      fio: { dataType: "string", required: true },
      score: { dataType: "string", required: true },
      birthday: { dataType: "string", required: true },
    },
    additionalProperties: true,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  IAddReq: {
    dataType: "refObject",
    properties: {
      fio: { dataType: "string", required: true },
      score: { dataType: "string", required: true },
      birthday: { dataType: "string", required: true },
    },
    additionalProperties: true,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  IUpdateReq: {
    dataType: "refObject",
    properties: {
      fio: { dataType: "string" },
      score: { dataType: "string" },
      birthday: { dataType: "string" },
    },
    additionalProperties: true,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Express) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.get("/pupils/list", function (request: any, response: any, next: any) {
    const args = {};

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request);
    } catch (err) {
      return next(err);
    }

    const controller = new PupuilController();

    const promise = controller.getAll.apply(controller, validatedArgs as any);
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post("/pupils/add", function (request: any, response: any, next: any) {
    const args = {
      body: { in: "body-prop", name: "body", required: true, ref: "IAddReq" },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request);
    } catch (err) {
      return next(err);
    }

    const controller = new PupuilController();

    const promise = controller.create.apply(controller, validatedArgs as any);
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.put("/pupils/:id", function (request: any, response: any, next: any) {
    const args = {
      id: { in: "path", name: "id", required: true, dataType: "string" },
      body: {
        in: "body-prop",
        name: "body",
        required: true,
        ref: "IUpdateReq",
      },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request);
    } catch (err) {
      return next(err);
    }

    const controller = new PupuilController();

    const promise = controller.update.apply(controller, validatedArgs as any);
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete("/pupils/:id", function (request: any, response: any, next: any) {
    const args = {
      id: { in: "path", name: "id", required: true, dataType: "string" },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request);
    } catch (err) {
      return next(err);
    }

    const controller = new PupuilController();

    const promise = controller.remove.apply(controller, validatedArgs as any);
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      "getHeaders" in object && "getStatus" in object && "setStatus" in object
    );
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    next: any
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode;
        if (isController(controllerObj)) {
          const headers = controllerObj.getHeaders();
          Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
          });

          statusCode = controllerObj.getStatus();
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        if (data || data === false) {
          // === false allows boolean result
          response.status(statusCode || 200).json(data);
        } else {
          response.status(statusCode || 204).end();
        }
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, request: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case "request":
          return request;
        case "query":
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors,
            undefined,
            { specVersion: 2 }
          );
        case "path":
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors,
            undefined,
            { specVersion: 2 }
          );
        case "header":
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors,
            undefined,
            { specVersion: 2 }
          );
        case "body":
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            name + ".",
            { specVersion: 2 }
          );
        case "body-prop":
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            "body.",
            { specVersion: 2 }
          );
      }
    });

    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, "");
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
