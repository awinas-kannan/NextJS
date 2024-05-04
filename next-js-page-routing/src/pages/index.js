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
      <Link href='/blog'>
        Blog
      </Link>
      <Link href='/product'>
        Products
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home
