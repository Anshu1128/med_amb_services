// GET ITEM BY KEY
export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  
  // SET ITEM (KEY, VALUE)
  export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // DELETE ITEM BY KEY
  export const deleteItem = (key) => {
    localStorage.removeItem(key);
  };

  // Store token into localStorage
export const saveSession = (accessToken,user) => {
    setItem("access_token", accessToken);
    setItem("user", user);
    
  };
  // Delete token from localStorage
  export const deleteSession = () => {
    deleteItem("access_token");
    deleteItem("user");

  };