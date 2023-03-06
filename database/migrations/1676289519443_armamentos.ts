import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Armamentos extends BaseSchema {
  protected tableName = 'armamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.string('nome'),
      table.integer('quantidade'),
      table.string('unidade'),
      table.timestamp('created_at', { useTz: true }).notNullable(),
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  } 

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
