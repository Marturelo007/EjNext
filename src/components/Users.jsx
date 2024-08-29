"use client";
import { useRouter } from "next/navigation";

const i = {
  borderRadius: "50%",
   marginRight: "5%",
}

function Users({ users }) {

    const router = useRouter()

    return(
      <div>
        <ul className="list-group">
          {users.map((user) => (
              <li key={user.id}
              className="list-group-item d-flex justify-content-left align-items-center list-group-item-action" 
              onClick={() => {
              router.push(`/users/${user.id}`)
              }}
             >
                <img src={user.avatar} alt={user.email } style={i}/>                  
                <div>                  
                  <h5>
                   {user.id} {user.first_name} {user.last_name}
                  </h5>
                 </div>

            </li>
          ))
        }
        </ul>
      </div>
    );
}

export default Users;