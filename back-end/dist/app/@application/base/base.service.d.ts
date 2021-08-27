import { Repository } from 'typeorm';
import { IGetAllFromDBResponse, IMessageOnlyResponse, IOptions, ISelectOptions } from '@application/interfaces/base.interfaces';
export declare abstract class BaseService<Entity> extends Repository<Entity> {
    repository: Repository<Entity>;
    entityName: string;
    constructor(repository: Repository<Entity>, entityName: string);
    insertIntoDB(payload: Entity): Promise<Entity>;
    bulkInsertIntoDB(payload: Entity[]): Promise<IMessageOnlyResponse>;
    updateIntoDB(id: string, payload: Entity): Promise<Entity>;
    deleteFromDB(id: string): Promise<any>;
    deleteByCriteriaFromDB(entity: Entity | Entity[]): Promise<IMessageOnlyResponse>;
    getByIdFromDB(id: string, options?: ISelectOptions): Promise<Entity>;
    getByCriteriaFromDB(criteria: Entity, options: IOptions): Promise<Entity>;
    getAllFromDB(filters: Entity, options: IOptions): Promise<IGetAllFromDBResponse<Entity>>;
}
