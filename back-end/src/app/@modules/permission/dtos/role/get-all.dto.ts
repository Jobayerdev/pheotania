import { ApiProperty } from "@nestjs/swagger"
import { BaseFilterDTO } from "@application/base/base-filter.dto"
import { Role } from "../../entities/role.entity"

export class GetAllRolesDTO extends BaseFilterDTO {
	@ApiProperty({
		required: false,
		description: `Example: ['title'].\n Available Options ==> ${Role.SEARCH_TERMS.join(
			", "
		)}`,
	})
	readonly selects: string

	@ApiProperty({
		required: false,
		description: `Example: ['relationName'].\n Available Relation Options ==> ${
			Role.RELATIONS.length
				? Role.RELATIONS.join(", ")
				: "No Relations Available"
		}`,
	})
	readonly relations: string

	@ApiProperty({
		required: false,
		description: `Example: ['name', 'ASC'].\n Available Order Options ==> ${Role.ORDERS.join(
			" / "
		)}`,
	})
	readonly order: string

	@ApiProperty({ required: false })
	readonly title: string
}
