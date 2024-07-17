import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header>
        <Link href = "/">
           <Image 
           src="https://links.papareact.com/a943ae"
           alt="Disney logo"
            height={120}
            width={100}
            className="cursor-pointer invert"
           />
        </Link>

        <div className="flex space-x-2">
            {/* genre Dropdown */}
            {/* Search Input */}
            {/* dark mode toggle */}
        </div>
    </header>
  )
}

export default Header