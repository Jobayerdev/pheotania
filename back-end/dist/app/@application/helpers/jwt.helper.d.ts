export declare class JWTHelper {
    sign(payload: any, options: any): Promise<string>;
    verify(token: string): Promise<string | import("jsonwebtoken").JwtPayload>;
    makeAccessToken(data: any): Promise<{
        token: string;
        exp: any;
    }>;
    makePermissionToken(permissions: string[]): Promise<string>;
}
