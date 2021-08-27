import { CreateServiceDTO } from './../dtos/create-service.dto';
import { ServiceService } from './../services/service.service';
export declare class ServiceController {
    private serviceService;
    private static NAME;
    constructor(serviceService: ServiceService);
    getAll(): Promise<import("../entities/service.entities").Service>;
    create(createServiceDto: CreateServiceDTO): Promise<import("../entities/service.entities").Service>;
    update(id: string, createServiceDto: CreateServiceDTO): Promise<import("../entities/service.entities").Service>;
    delete(id: string): Promise<any>;
    getById(id: string): Promise<import("../entities/service.entities").Service>;
}
