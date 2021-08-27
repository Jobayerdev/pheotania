export declare class BaseError extends Error {
    private errorResponse;
    private httpErrorCode;
    constructor(appErrorCode: number, message: string);
}
