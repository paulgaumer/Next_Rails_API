import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function Blog(props) {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {props.examples.map((ex) => (
          <li key={ex.id} style={{ backgroundColor: `${ex.colour}` }}>
            {ex.name}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Blog.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/examples');
  const data = await res.json();

  return {
    examples: data
  };
};
