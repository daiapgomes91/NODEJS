import bcrypt, { hash } from 'bcryptjs'
import  Jwt from 'jsonwebtoken'
import pool from '../config/database.js'

export const gerarHashSenha = async (senha)=> bcrypt.hash(senha,10)
export const compararSenha = async (senha, hash)=>{ cbcrypt.compare(senha, hash)}

export const gerarToken = (payload) => Jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn: '8h'}


)
