export declare class AppErrorResponse {
    status: string;
    errorName: string;
    errorCode: number;
    message: string;
    developerMessage: string;
    constructor(errorName: string, errorCode: number, message: string, developerMessage?: string);
    setDeveloperMessage(msg: string): void;
}
