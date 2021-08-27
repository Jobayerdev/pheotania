export declare class BcryptHelper {
    hashString(plainText: string, slatRounds?: number): Promise<string>;
    compareHash(plainText: string, hashString: string): Promise<boolean>;
}
