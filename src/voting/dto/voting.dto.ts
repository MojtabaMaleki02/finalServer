import { IsNotEmpty } from 'class-validator'

export class VotingDto {
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  restaurantName: string

  @IsNotEmpty()
  restaurantId: number

  @IsNotEmpty()
  userName: string
}
