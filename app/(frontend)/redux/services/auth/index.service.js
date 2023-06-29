// import axios from "@/libs/axios";
// import getHeader from "@/helpers/getHeader";

// const register = (data) => {
//   return axios.post("auth/registerWithEmail", data);
// };

// const login = (obj) => {
//   return axios.post("auth/createOrCheckEmail", obj);
// };
// const logoutUser = async (refreshToken) => {
//   const headers = await getHeader();
//   return axios.post("auth/logout", {refreshToken}, { headers: headers });
// };
// const socialLogin = (data) => {
//   return axios.post("auth/socialLogin", data);
// };
// const updateUsername = async (body) => {
//   const headers = await getHeader();
//   return axios.post("auth/updateUsername", body, { headers: headers });
// };
// const verifyAccount = (obj) => {
//   return axios.post("auth/verifyAccountByEmail", obj);
// };
// const AuthServices = {
//   register,
//   login,
//   socialLogin,
//   updateUsername,
//   logoutUser,
//   verifyAccount
// };

// export default AuthServices;
