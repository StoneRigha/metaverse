import Login from '@/components/Login'
import Image from 'next/image'

const isAuthenticated = false;


export default function Home() {

if (!isAuthenticated) 
return <Login />

  return (
    <div className='h-screen'>
      <h1>Welcome to the Metaverse by Stone</h1>
    </div>
    )
}
