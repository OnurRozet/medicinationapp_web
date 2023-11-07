

const USER_COOKIE_KEY = "cavayan-user";

const CookieUtil = {
  getCookie: (key)=> {
    let result = undefined;
    const cookieValues = document.cookie?.split(";");
    cookieValues.forEach((cookie) => {
      const values = cookie.split("=");
      if (values[0].trim() === key && values.length > 0) {
        result = values[1];
      }
    });
    return result;
  },
  setCookie: (key, value) => {
    if (key) document.cookie = `${key}=${value ?? ""};path=/`;
  },
  setUser: (user)=> {
    CookieUtil.setCookie(USER_COOKIE_KEY, user ? JSON.stringify(user) : "");
  },
  getUser: () => {
    let result= undefined;
    const cookieVal = CookieUtil.getCookie(USER_COOKIE_KEY);
    if (cookieVal) {
      try {
        result = JSON.parse(cookieVal);
      } catch {}
    }
    return result;
  },
};

export default CookieUtil;