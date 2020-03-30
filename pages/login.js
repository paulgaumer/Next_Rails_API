import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

export default function LogIn(props) {
  const login = async () => {
    const res = await fetch('http://localhost:3000/api/users/sign_in', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { email: 'michel@test.com', password: 'password' }
      })
    });
    const data = await res.json();
    console.log(data);

    // return {
    //   examples: data
    // };
  };

  const handleClick = (e) => {
    login();
  };

  return (
    <Layout>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </Layout>
  );
}
