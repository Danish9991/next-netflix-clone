import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext, GetServerSidePropsContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context : NextPageContext) {
  const session = await getSession(context)

  if(!session){
    return {
      redirect : {
        destination : '/auth',
        permanent : false
      }
    }
  }

  return {
    props  : {}
  }

}

export default function Home() {

  const { data : user} = useCurrentUser()
  return (
    <>
    <p className="text-white">logged in as {user?.email}</p>
   <h1 className="text-green-300 mt-4 py-3 px-3">hello world</h1>
   <button onClick={() => signOut()}>Logout</button>
   </>
  )
}

