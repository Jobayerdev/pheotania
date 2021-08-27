export declare class AppSuccessResponse {
    success: boolean;
    statusCode: number;
    message: string;
    total: number;
    payload: any;
    constructor(message: string, payload: any, total?: number);
}
