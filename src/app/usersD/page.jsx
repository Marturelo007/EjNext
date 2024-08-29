import Navigation from "@/components/navigation";
import Users from "@/components/Users"

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function IndexPage() {
  const users = await fetchUsers()
  return (
           <body
           style={{
           backgroundColor: `blue`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           height: '100vh',
           width: '100vw',
           }}>
          <Navigation />
          
            <Users users={users}/>
          
          </body>
  );
}

export default IndexPage;