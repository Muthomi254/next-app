import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   ">
     Hellow world
     <Link href="/users">Users</Link>
     <Link href={'/users/new'}>New User</Link>
     <ProductCard />
    </main>
  )
}
