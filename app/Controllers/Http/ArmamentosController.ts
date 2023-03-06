import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Armamento from 'App/Models/Armamento'



export default class ArmamentosController {

    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await Armamento.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 

        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const armamentos = await Armamento.all()

        response.status(200).send(armamentos)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const armamentos = await Armamento.find(params.id)
        if(armamentos){
            armamentos.merge(request.only(['nome','quantidade','unidade']))
            armamentos.save()
            console.log("usuario atualizado!")
            response.status(200).send(armamentos)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const armamentos = await Armamento.find(params.id)

        if(armamentos){
            armamentos.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(armamentos)
        }else{
            console.log('erro no id passado')

        }

    }

}
