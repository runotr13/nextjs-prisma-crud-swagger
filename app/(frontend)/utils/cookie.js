// "use client"
import Cookies from "js-cookie"
const SaveTokenCookie = (token) => {

  Cookies.set("token", token, {
    path: "/",
    secure: process.env.REACT_APP_NODE_ENV === "development" ? false : true,
  });
  return;
};

const SaveUser = (user) => {
  Cookies.set("user", user, {
    path: "/",
    secure: process.env.REACT_APP_NODE_ENV === "development" ? false : true,
  });
  return;
};

const UpdateUser = (user) => {
  const oldUser = Cookies.get("user");
  const newUser = { ...oldUser, ...user };
  Cookies.set("user", newUser, {
    path: "/",
    secure: process.env.REACT_APP_NODE_ENV === "development" ? false : true,
  });
  return;
};

const GetUserCookie = () => {

  const user = Cookies.get("user");
  return user;
};

const GetTokenCookie = () => {

  const token = Cookies.get("token");
  return token;
};
const RemoveUserCookie = () => {
  Cookies.remove("user",{path : '/'});
  return;
};

const RemoveTokenCookie = () => {
  Cookies.remove("token",{path : '/'});
  return;
};

export {

  SaveTokenCookie,
  SaveUser,
  UpdateUser,
  GetUserCookie,
  RemoveUserCookie,
  RemoveTokenCookie,
  GetTokenCookie
};
