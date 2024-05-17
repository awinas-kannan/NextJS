import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'

function Dashboard() {
  const [loading, setLoading] = useState(true)

  const securePage = async () => {
    const session = await getSession()
    console.log('Dashboard', { session })
    if (!session) {
      signIn()
    } else {
      setLoading(false)
    }
  }
  useEffect(() => {
    securePage()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }
  return <h1>Dashboard page</h1>
}

export default Dashboard
