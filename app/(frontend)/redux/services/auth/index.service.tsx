// "use client"
import getHeader from "@/app/(frontend)/helpers/getHeader";
import { RemoveTokenCookie, RemoveUserCookie } from "@/app/(frontend)/utils/cookie";

var headers = getHeader();
async function getData(obj: object, path: string): Promise<Response> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(obj)
  });
  if (!response.ok) throw new Error(response.statusText)
  return response.json();
};

async function register(data: object): Promise<any> {
  const response = await getData(data, 'registerWithEmail');
  return response;
};
async function login(obj: object): Promise<any> {
  const response = await getData(obj, 'createOrCheckEmail');
  return response;
};
async function verifyAccount(obj: object): Promise<any> {
  const response = await getData(obj, 'verifyAccountByEmail');
  return response;
};
async function logoutUser(refreshToken: object): Promise<any> {
  const response = await getData(refreshToken, 'logout');
  if (response.ok) {
    await RemoveTokenCookie();
    await RemoveUserCookie();
  }
  return response;
};

const AuthServices = {
  register,
  login,
  logoutUser,
  verifyAccount
};

export default AuthServices;
