export interface IOrderOption {
    propertyName: string;
    option: OrderOptions;
}
export declare enum OrderOptions {
    ASC = "ASC",
    DESC = "DESC"
}
export interface IMessageOnlyResponse {
    message: string;
    id?: any;
    ids?: any[];
}
export interface ISelectOptions {
    relations?: string[];
    selects?: string[];
}
export interface IOptions {
    searchTerm?: string;
    relations?: string[];
    selects?: string[];
    order?: IOrderOption;
    take?: number;
    page?: number;
    skip?: number;
    fetchAll?: boolean;
    single?: boolean;
    ids?: string[];
    between?: string[];
    before?: Date;
    after?: Date;
    startDate?: Date;
    endDate?: Date;
}
export interface IProperties {
    ownColumns: string[];
    relations: string[];
    searchTerms: string[];
    orders: string[];
}
export interface IGetAllFromDBResponse<T> {
    data: T[];
    total: number;
}
