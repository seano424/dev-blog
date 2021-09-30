import Link from 'next/link'

function Header() {
  const user = null
  const username = null
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>FEED</a>
          </Link>
        </li>

        {/* user is signed in and has username */}
        {username && (
          <>
            <li>
              <Link href="/admin">
                <a>Write Posts</a>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed in or has no username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Header
