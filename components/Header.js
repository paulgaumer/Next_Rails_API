import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import cookie from 'js-cookie';

const linkStyle = {
  marginRight: 15,
};

export default function Header() {
  const handleLogOut = (e) => {
    const token = cookie.get('token');
    const apiUrl = process.env.API_HOST;

    e.preventDefault();
    fetch(`${apiUrl}/users/sign_out`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    });
    cookie.remove('token');
    Router.push('/');
  };

  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/dashboard">
        <a style={linkStyle}>Dashboard</a>
      </Link>
      <Link href="/signin">
        <a style={linkStyle}>Login</a>
      </Link>
      <Link href="/signup">
        <a style={linkStyle}>Sign Up</a>
      </Link>
      <a style={linkStyle} onClick={handleLogOut}>
        Log out
      </a>
    </div>
  );
}
