// "use client"
import getHeader from "@/app/(frontend)/helpers/getHeader";


let headers = getHeader();
let BACKEND_URL = process.env.BACKEND_API_URL;
async function getData(obj: object, path: string): Promise<Response> {
  const response = await fetch(`${BACKEND_URL}/user/${path}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(obj)
  });
  return response.json();
};

async function getUser(obj: object): Promise<any> {
  const response = await getData(obj, 'getUser');
  return response;
};
async function updateUser(values: object): Promise<any> {
  const response = await getData(values, 'updateUser');
  return response;
};

async function changePassword(values: object): Promise<any> {
  const response = await getData(values, 'changePassword');
  return response;
};
async function resetPasswordByEmail(values: object): Promise<any> {
  const response = await getData(values, 'resetPasswordByEmail');
  return response;
}

const UserServices = {
  getUser,
  updateUser,
  changePassword,
  resetPasswordByEmail
};

export default UserServices;
