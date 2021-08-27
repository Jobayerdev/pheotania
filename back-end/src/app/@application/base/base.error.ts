export class BaseError extends Error {
  private errorResponse: any;
  private httpErrorCode: number;
  constructor(appErrorCode: number, message: string) {
    super(message);
    this.errorResponse;
  }
}
