import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity()
export class Voting {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  restaurantName: string

  @Column()
  restaurantId: number

  @Column()
  userName: string

  @CreateDateColumn() createdOn?: Date
}
