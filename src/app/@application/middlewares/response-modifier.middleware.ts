import { Injectable, NestMiddleware } from '@nestjs/common';

import { IOptions } from '@application/interfaces/base.interfaces';
import { NextFunction } from 'express';
import { RequestMethods } from '@application/enums';

/*
https://docs.nestjs.com/middleware#middleware
*/

@Injectable()
export class ResponseModifierMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    const options: string[] = [];
    const reqOptions: IOptions = {};

    let _req: any = {};

    if (req.method === RequestMethods.GET) {
      _req = req.query;
    } else if (req.method === RequestMethods.POST || RequestMethods.PUT) {
      _req = req.body;
    }

    if (_req.searchTerm) {
      reqOptions.searchTerm = String(_req.searchTerm).trim();
      options.push('searchTerm');
    }

    if (_req.selects) {
      try {
        reqOptions.selects = eval(_req.selects);
        reqOptions.selects.splice(0, 0, 'id');
        options.push('selects');
      } catch (error) {
        delete _req.selects;
        throw new Error('Invalid Selects');
      }
    }

    if (_req.take) {
      try {
        reqOptions.take = Number(_req.take);
        if (isNaN(_req.take)) {
          delete _req.take;
          throw new Error('Take have to be number');
        } else {
          options.push('take');
        }
      } catch (error) {
        delete _req.take;
        throw new Error('Take have to be number');
      }
    }
    if (_req.page) {
      try {
        reqOptions.page = Number(_req.page);
        if (isNaN(_req.page)) {
          delete _req.page;
          throw new Error('page have to be number');
        } else {
          options.push('page');
        }
      } catch (error) {
        delete _req.page;
        throw new Error('page have to be number');
      }
    }

    if (!_req.take || !_req.page) {
      reqOptions.take = 10;
      reqOptions.skip = 0;
    }

    if (_req.take && _req.page) {
      reqOptions.skip = _req.page === 1 ? 0 : (_req.page - 1) * _req.take;
      reqOptions.page = Number(_req.page);
    }

    req.reqOptions = reqOptions;

    // options.map((opt) => {
    //   if (req.method === RequestMethods.GET) {
    //     if (Object.keys(req.query).includes(opt)) {
    //       delete _req[opt];
    //     }
    //   }
    // });

    // console.log(_req);
    // console.log(Object.keys(req.query));

    next();
  }
}
