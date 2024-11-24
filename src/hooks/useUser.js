import { useEffect, useState } from "react";
import { useUserID } from "@/hooks/useUserID";
import { getUserById } from "@/functions/fetch";

export function useUser() {
  const userID = useUserID();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userID) {
      getUserById(userID)
        .then(setUser)
        .catch((error) => console.error("Error obteniendo el usuario:", error));
    }
  }, [userID]);

  return { user, userID };
}
