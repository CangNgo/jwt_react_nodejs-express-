//message, status code, error codes 

export class HttpException extends Error {
    message: string;
    errorCode: any;
    statusCode: number;
    errors: ErrorCode;

    constructor(message: string, errorCode: ErrorCode, statusCode: number, errors: any) {
        super(message)
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = errors
    }
}

export enum ErrorCode {
    UNAUTHORIZATION = 1000,     
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS =1002, 
    ROLE_NOT_FOUND = 1003, 
    ROLT_ALREADY_EXISTS = 1004,
    MISSING_PARAM = 1004,
}