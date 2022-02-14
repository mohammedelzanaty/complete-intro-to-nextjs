import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      {/* <img src="/images/profile.jpg" alt="Your Name" /> */}
      <Image
        src="/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
