import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

export default function SignUp(props) {
  const signup = async () => {
    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { email: 'bibi@test.com', password: 'password' }
      })
    });
    const data = await res.json();
    console.log(data);

    // return {
    //   examples: data
    // };
  };

  const handleClick = (e) => {
    signup();
  };

  return (
    <Layout>
      <h1>Sign Up</h1>
      <button onClick={handleClick}>Sign Up</button>
    </Layout>
  );
}
