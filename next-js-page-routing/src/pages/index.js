import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }
  return (
    <>
      <h1>Welcome Home</h1>
      <ul>
        <li>
          <Link href='/blog'> Blog </Link>
        </li>
        <li>
          <Link href='/product'> Products   </Link>
        </li>
        <li>
          <button onClick={handleClick}>Place Order</button>
        </li>
      </ul>
    </>
  )
}

export default Home
