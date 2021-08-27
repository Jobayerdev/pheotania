export declare abstract class BaseController<CreateDTO, UpdateDTO> {
    private _modelService;
    _service: any;
    constructor(_modelService: any);
    create(createServiceDto: CreateDTO): Promise<any>;
    update(id: string, createServiceDto: UpdateDTO): Promise<any>;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
