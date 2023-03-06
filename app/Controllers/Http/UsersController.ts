import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext' 
import User from 'App/Models/User'


export default class UsersController {
  public async index({
    response
  }: HttpContextContract) {
    const user = await User.all();
    response.status(200).json(user)
  }

  public async create({}: HttpContextContract) {}

  public async store({response, request}: HttpContextContract) {

    const user = await User.create(request.only(['nome','email','senha']))
    response.status(200).json(user)
  }

  public async update({params, response,request}: HttpContextContract) {

    const user = await User.find(params.id)

    if(user){
      user.merge(request.only(['nome','email','senha']))
      user.save()
    }

    response.status(200).json(user)
  }

  public async delete({params,response}:HttpContextContract){
    const user = await User.find(params.id)

    if(user){
      user.delete()
      response.status(200).json({msg:`usuario ${params.id} foi excluido`})
    }

  }

  public async edit({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
