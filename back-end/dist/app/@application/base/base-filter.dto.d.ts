export declare class BaseFilterDTO {
    readonly searchTerm: string;
    readonly between: string;
    readonly before: string;
    readonly after: string;
    readonly take: number;
    readonly page: number;
    readonly fetchAll: boolean;
    readonly single: boolean;
    isActive?: boolean;
}
