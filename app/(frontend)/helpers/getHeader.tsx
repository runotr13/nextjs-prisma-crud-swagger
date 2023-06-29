import getToken from './getToken'
const getHeader = () => {
  const token = getToken()
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
  return headers
}
export default getHeader
