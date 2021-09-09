import { IGetAllFromDBResponse, IMessageOnlyResponse, IOptions } from '@application/interfaces/base.interfaces';
import { User } from '@modules/user/entities/user.entities';
export declare abstract class BaseController<CreateDTO, UpdateDTO> {
    private _modelService;
    _service: any;
    constructor(_modelService: any);
    getAll(reqOptions: IOptions, reqPayloads: any): Promise<IGetAllFromDBResponse<User>>;
    getById(id: string): Promise<User>;
    insert(reqOptions: IOptions, reqPayloads: CreateDTO): Promise<User>;
    update(id: string, reqPayloads: UpdateDTO): Promise<User>;
    delete(id: string): Promise<IMessageOnlyResponse>;
}
