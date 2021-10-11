import { Field, Int, ObjectType } from '@nestjs/graphql'

import { FinanceCategoryDto } from '#models/finance-category/dto/finance-category.dto'

// Types
import { IFinanceRecord } from '#interfaces/finance'

@ObjectType()
export class FinanceRecordDto {
	@Field(() => Int)
	amount: IFinanceRecord['amount']

	@Field(() => FinanceCategoryDto)
	category: FinanceCategoryDto

	@Field(() => String)
	date: IFinanceRecord['date']

	@Field(() => Int)
	id: IFinanceRecord['id']

	@Field(() => Boolean)
	isTrashed: IFinanceRecord['isTrashed']
}
