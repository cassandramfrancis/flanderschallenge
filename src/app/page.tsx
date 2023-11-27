import Image from 'next/image'
import { Heading } from '../components/heading'
import { Login } from '../components/login'

export default function Home() {
  return (
    <main className="container mx-auto m-8">
      <Heading>Flanders Frontend Coding Challenge</Heading>
      <p>Please login below</p>
      <Login />
    </main>
  )
}
