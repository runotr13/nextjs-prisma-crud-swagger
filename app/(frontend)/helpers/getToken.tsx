import Cookies from "js-cookie"

const getToken = (): string | undefined => {
  const token = Cookies.get('token')
  return token
}

export default getToken
