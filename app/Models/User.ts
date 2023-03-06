import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome:string

  @column()
  public email:string

  @column()
  public senha:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  public static $columns:Pick<User,
  'id'|'nome'|'email'|'senha'|'createdAt'|'updatedAt'>


}
