import { IGetAllFromDBResponse, IMessageOnlyResponse, IOptions } from '@application/interfaces/base.interfaces';
import { ServiceDTO } from '../dtos/service.dtos';
import { Service } from '../entities/service.entity';
import { GetAllServiceDTO } from './../dtos/service.dtos';
import { ServiceService } from './../services/service.service';
export declare class ServiceController {
    private service;
    constructor(service: ServiceService);
    getAll(reqOptions: IOptions, reqPayloads: GetAllServiceDTO): Promise<IGetAllFromDBResponse<Service>>;
    getById(id: string): Promise<Service>;
    insert(reqOptions: IOptions, reqPayloads: ServiceDTO): Promise<Service>;
    update(id: string, reqPayloads: ServiceDTO): Promise<Service>;
    delete(id: string): Promise<IMessageOnlyResponse>;
}
