/*
https://docs.nestjs.com/controllers#controllers
*/

export abstract class BaseController<Entity> {
  _service: any;

  constructor(private _modelService: any) {
    this._service = _modelService;
  }
}
