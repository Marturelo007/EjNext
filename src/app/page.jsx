import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function IndexPage() {
  const users = await fetchUsers()
  return (
          <div>
            <h1>  Index Page</h1>
            <ul>
              {
                users.map((user) => (
                  <li key={user.id}>
                    <div>
                      <h5>{user.id}</h5>
                      <p>{user.email}</p>
                    </div>
                    <img src={user.avatar} alt={user.email    } />
                  </li>
                ))
              }
            </ul>
          </div>
  );
}

export default IndexPage;