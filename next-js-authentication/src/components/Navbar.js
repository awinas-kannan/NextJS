import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
function Navbar() {
  const { data: session } = useSession()
  const { data, status, update } = useSession()
  // console.log({ session })
  console.log({ data, status, update })
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className='main-nav'>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            Blog
          </Link>
        </li>

        {!session ?
          <li>
            <Link href='/api/auth/signin' onClick={e => {
              e.preventDefault()
              signIn('github')
              // signIn('')
            }}>
              Sign In
            </Link>
          </li>
          :

          <li>
            <Link href='/api/auth/signout' onClick={e => {
              e.preventDefault()
              signOut()
            }}>
              Sign Out
            </Link>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Navbar
