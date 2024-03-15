
import Link from 'next/link'
function NotFound() {
  return (
    <div>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href={"/"}>Take Me Home!</Link>
    </div>
  )
}

export default NotFound