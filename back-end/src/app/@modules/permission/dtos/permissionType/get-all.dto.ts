import { ApiProperty } from "@nestjs/swagger"
import { BaseFilterDTO } from "@application/base/base-filter.dto"
import { PermissionType } from "../../entities/permissionType.entity"

export class GetAllPermissionTypesDTO extends BaseFilterDTO {
	@ApiProperty({
		required: false,
		description: `Example: ['title'].\n Available Options ==> ${PermissionType.SEARCH_TERMS.join(
			", "
		)}`,
	})
	readonly selects: string

	@ApiProperty({
		required: false,
		description: `Example: ['relationName'].\n Available Relation Options ==> ${
			PermissionType.RELATIONS.length
				? PermissionType.RELATIONS.join(", ")
				: "No Relations Available"
		}`,
	})
	readonly relations: string

	@ApiProperty({
		required: false,
		description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${PermissionType.ORDERS.join(
			" / "
		)}`,
	})
	readonly order: string

	@ApiProperty({ required: false })
	readonly title: string
}
