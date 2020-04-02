// import { useContext, useEffect } from 'react';
import Layout from '../components/MyLayout.js';
// import fetch from 'isomorphic-unfetch';
// import nextCookie from 'next-cookies';
// import { UserDispatchContext } from '../context/userContextProvider';

const Index = (props) => {
  // const userDispatch = useContext(UserDispatchContext);

  // useEffect(() => {
  //   userDispatch({
  //     type: 'SET_CURRENT_USER',
  //     payload: props.user
  //   });
  // }, []);

  return (
    <Layout>
      <h1>Welcome to Podee</h1>
    </Layout>
  );
};

export default Index;

// Index.getInitialProps = async function(ctx) {
//   const { token } = nextCookie(ctx);

//   const res = await fetch('http://localhost:3000/users/current', {
//     method: 'get',
//     headers: {
//       Authorization: `${token}`
//     }
//   });
//   const data = await res.json();

//   return {
//     user: data.user
//   };
// };
