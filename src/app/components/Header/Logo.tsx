import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold">
        W<span className="text-target">Z</span>
      </p>
    </Link>
  )
}
