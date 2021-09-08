import { IsNotEmpty, IsString } from "class-validator"

import { ApiProperty } from "@nestjs/swagger"
import { BaseEntity } from "@application/base"

export class CreateImageDTO extends BaseEntity {
	@ApiProperty({
		required: true,
		example:
			"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	})
	@IsString()
	@IsNotEmpty()
	link?: string
}
