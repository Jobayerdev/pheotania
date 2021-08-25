export class AppSuccessResponse {
  public success: boolean;
  public statusCode: number;
  public message: string;
  public total: number;
  public payload: any;

  constructor(message: string, payload: any, total?: number) {
    this.success = true;
    this.statusCode = this.statusCode;
    this.message = message;
    this.total = total;
    this.payload = payload;
  }
}
