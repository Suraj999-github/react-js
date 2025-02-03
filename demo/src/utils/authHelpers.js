export const setAuthToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  
  export const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };
  
  export const isAuthenticated = () => {
    return !!getAuthToken();
  };
  
  export const logout = () => {
    localStorage.removeItem("authToken");
  };
  