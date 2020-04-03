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
      <h1 className="text-red-600">Welcome to Podwee</h1>
    </Layout>
  );
};

export default Index;

// Index.getInitialProps = async function(ctx) {
//   const { token } = nextCookie(ctx);
// const apiUrl = process.env.API_HOST;

//   const res = await fetch(`${apiUrl}/users/current`, {
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
