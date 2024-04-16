import { useEffect, useState } from "react";

export const useClient = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");
    setUserType(userType);
    setToken(token);
  }, []);

  return { userType, token };
};