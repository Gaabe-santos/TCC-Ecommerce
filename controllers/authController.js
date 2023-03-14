import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        const {nome, email, senha, telefone, endereco} = req.body
        //validações
        if(!nome){
            return res.send({error:'Nome é Obrigatório'});
        }
        if(!email){
            return res.send({error:'Email é Obrigatório'});
        }
        if(!senha){
            return res.send({error:'Senha é Obrigatório'});
        }
        if(!telefone){
            return res.send({error:'Telefone não é Obrigatório'});
        }
        if(!endereco){
            return res.send({error:'Endereço é Obrigatório'});
        }
        //Verificar Usuário
        const existingUser = await userModel.findOne({email})
        //Usuário Existente
        if(existingUser){
            return res.status(200).send({
                sucess: true,
                message: 'Usuário cadastrado, por favor faça o login',
            });
        };

        //Registrar Usuário 
        const hashedPassword = await hashPassword(password);

        //Salvar
        const user = new userModel({nome,email,telefone,endereco,senha:hashedPassword}).save()

        res.status(201).send({
            sucess: true,
            message: 'Usuário Registrado com Sucesso',
            user,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            sucess: false,
            message: 'Erro no Cadastro',
            error
        });
    };
};
