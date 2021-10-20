import axios from 'axios'
import prismaClient from '../prisma'
import { sign } from 'jsonwebtoken'

/**
 * Receber code(string)
 * Recuperar o acess_token no github
 * Recuperar infos do user no github
 * Verificar se o usuario existe no DB
 * SE SIM: Gera um token
 * SE NÃO: Cria no DB, gera um token
 * Retornar o token com as infos do user
 */

interface AccessTokenResponse {
  access_token: string
}

interface UserResponse {
  id: number
  login: string
  avatar_url: string
  name: string
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token'

    const { data: accessTokenResponse } = await axios.post<AccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    })

    const response = await axios.get<UserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `bearer ${accessTokenResponse.access_token}`,
      },
    })

    const { id, login, avatar_url, name } = response.data

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id,
      },
    })

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: id,
          name,
          login,
          avatar_url,
        },
      })
    }

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    return { token, user }
  }
}

export { AuthenticateUserService }
