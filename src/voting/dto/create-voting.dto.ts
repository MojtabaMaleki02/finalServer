import { IsNotEmpty } from 'class-validator'

export class CreateVotingDto {
  @IsNotEmpty()
  restaurantName: string

  @IsNotEmpty()
  restaurantId: number

  @IsNotEmpty()
  userName: string
}
