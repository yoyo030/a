// ./src/apis/authorization.js
import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  // signIn api 成功串接 功能正常
  signIn({ account, password }) {   
    return apiHelper.post("/login", {
      account,
      password,
    });
  },
  // signUp api 成功串接 功能正常
  signUp({ account, name, email, password, checkPassword }) {
    return apiHelper.post("/users", {
      account,
      name,
      email,
      password,
      checkPassword,
    });
  },


 // GetUserData api 成功串接 有拿到資料
  Test(id) {
    return apiHelper.get(`users/${id}}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  // getTweets api --> 進入主頁後 正下方的推文List 串接失敗 把token送過去後 顯示沒權限 
  getTweets() {
    return apiHelper.get(`/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },

  settingSave({ id, account, name, email, password, checkPassword }) {
    return apiHelper.put(`users/${id}}`, {
      account,
      name,
      email,
      password,
      checkPassword,
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },















  get({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getTopUsers() {
    return apiHelper.get("/users/top", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
