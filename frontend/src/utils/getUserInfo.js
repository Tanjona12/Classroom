export function getUserInfo() {
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      try {
        return JSON.parse(userInfo);
      } catch (error) {
        console.error("Erreur de parsing des informations utilisateur :", error);
        return null;
      }
    }
    return null;
  }
  