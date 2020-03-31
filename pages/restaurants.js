import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
// import Link from 'next/link';

const Restaurants = (props) => {
  return (
    <Layout>
      <h1>Restaurants List</h1>
      {props.examples.length === undefined && <p>Please sign in or sign up</p>}
      {props.examples.length !== undefined && (
        <ul>
          {props.examples.map((ex) => (
            <li key={ex.id} style={{ backgroundColor: `${ex.colour}` }}>
              {ex.name}
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Restaurants;

Restaurants.getInitialProps = async function(ctx) {
  const { token } = nextCookie(ctx);

  const res = await fetch('http://localhost:3000/api/examples', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();
  console.log(data);

  return {
    examples: data
  };
};
