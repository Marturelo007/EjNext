"use client"
import pepe from "/src/app/pepe.css";
import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Users from "@/components/Users"
import { useSocket } from "@/hooks/useSocket";

export default function UsersRanking() {
  const { socket, isConnected } = useSocket();

  useEffect(() => {

  }, [socket, isConnected]);

  return(
    <h1>
      Soy la ruta 
    </h1>
  );
}





























{/* 
 const card = {
//   borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
// }

// async function IndexPage() {
//   const users = await fetchUsers()
//   return (
//            <body
//            style={{
//            backgroundColor: `blue`,
//            backgroundSize: 'cover',
//            backgroundPosition: 'center',
//            backgroundRepeat: 'no-repeat',
//            height: '100vh',
//            width: '100vw',
//            }}>
//           <Navigation />
//           <Users users={users}/>
          
//           </body>
//   );
// }

// export default IndexPage; */}