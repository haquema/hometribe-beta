// Save session data to sessionStorage
export const saveSession = (sessionData) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem('session', JSON.stringify(sessionData));
  }
};

// Retrieve session data from sessionStorage
export const getSession = () => {
  if (typeof window !== "undefined") {
    const sessionData = sessionStorage.getItem('session');
    return sessionData ? JSON.parse(sessionData) : null;
  }
};

// Clear session data from sessionStorage
export const clearSession = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem('session');
  }
};
