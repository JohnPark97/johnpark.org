
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
      <Link href="/about">
        About
      </Link>
      <br/>
      <Link href="/skills">
        Skills
      </Link>
      <br/>
      <Link href="/tutoring">
        Tutoring
      </Link>
      </div>
    </main>
  )
}
