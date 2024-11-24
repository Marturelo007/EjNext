import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useUserID() {
  const searchParams = useSearchParams();
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const idFromParams = searchParams?.get("userID");
    const idFromStorage = localStorage.getItem("userID");
    setUserID(idFromParams || idFromStorage || "");
  }, [searchParams]);

  return userID;
}
