import { getSession, useSession } from 'next-auth/react'

function Blog(props) {
  const { data } = useSession()
  console.log(props.data)
  return (
    <>
      {data.user.email}
      <h1>{props.data}</h1>
    </>
  )

}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false
      }
    }
  }
  return {
    props: {
      data: 'List of 100 personalized blogs',
      session
    }
  }
}
