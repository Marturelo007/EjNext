import pepe from "/src/app/pepe.css";


async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

const card = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
}

async function UserPage({params}) {
  const user = await getUser(params.id)

  return (
    <div></div>
  )
}

export default UserPage;