require('dotenv').config();

const jwt = require('jsonwebtoken');

const user_auth = (req, res, next) => {
    const {authorization} = req.headers

    const token = authorization && authorization.split(' ')[1]
    if(!token){
        console.log(token);
        return res.status(401).json({error:{msg:'usuário não autorizado!'}})
    }

    try {
        jwt.verify( token, process.env.SECRET, (error, decoded) => {
            if(error) {
                console.log(error)
                return res.status(401).json({error:{msg:'Houve um error na solicitação de acesso para esta página!'}})
            };

            req.tokenDecoded = decoded;
            next();
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:{msg:'Não foi possível processar sua autorização!'}});
    }
};

module.exports = user_auth;