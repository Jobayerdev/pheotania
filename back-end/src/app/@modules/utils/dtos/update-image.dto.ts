import { IsNotEmpty, IsString } from "class-validator"

import { ApiProperty } from "@nestjs/swagger"
import { BaseEntity } from "@application/base"

export class UpdateImageDTO extends BaseEntity {
	@ApiProperty({
		required: true,
		example:
			"https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80",
	})
	@IsString()
	@IsNotEmpty()
	link?: string
}
