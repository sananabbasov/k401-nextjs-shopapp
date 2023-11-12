import React from 'react'
import "@/app/globals.css"
import { signIn } from 'next-auth/react'
export default function index() {

  const login = async () => {
    await signIn("credentials", {
      redirect: true,
      username: "ehmed@compar.edu.az",
      password: "Ehmed@123",
      callbackUrl: "/"
    });
  }

  return (
    <div>index



      <button onClick={() => login()}>Login</button>
    </div>
  )
}
