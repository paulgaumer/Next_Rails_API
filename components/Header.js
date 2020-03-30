import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/login">
        <a style={linkStyle}>Login</a>
      </Link>
      <Link href="/signup">
        <a style={linkStyle}>Sign Up</a>
      </Link>
    </div>
  );
}
