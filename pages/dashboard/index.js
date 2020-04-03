import { useEffect, useState } from 'react';
import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import Cookies from 'js-cookie';
import Link from 'next/link';
import NameForm from '../../components/dashboard/nameForm';
import AudioPlayerForm from '../../components/dashboard/audioPlayerForm';

const Dashboard = ({ initialData }) => {
  const [state, setState] = useState(initialData);

  // useEffect(() => {
  //   const apiUrl = process.env.API_HOST;
  //   const token = Cookies.get('token');

  //   const fetchData = async () => {
  //     const res = await fetch(`${apiUrl}/api/v1/dashboard`, {
  //       method: 'get',
  //       headers: {
  //         Authorization: token
  //       }
  //     });
  //     const data = await res.json();
  //     console.log(`Hello from useEffect:${data}`);
  //     return data;
  //   };
  //   const data = fetchData();
  //   setState(data);
  // }, []);

  return (
    <Layout>
      <h1>Welcome to your dashboard {state.user.email}</h1>
      <h2>Here is your Landing Page</h2>
      <Link href="/[podcast]" as={`/${state.name}`}>
        <a target="_blank">{state.name}</a>
      </Link>

      <NameForm podcastName={state.name} />
      <AudioPlayerForm podcastPlayer={state.audio_player} />
    </Layout>
  );
};

export default Dashboard;

Dashboard.getInitialProps = async function(ctx) {
  const { token } = nextCookie(ctx);
  const apiUrl = process.env.API_HOST;

  const res = await fetch(`${apiUrl}/api/v1/dashboard`, {
    method: 'get',
    headers: {
      Authorization: token
    }
  });
  const data = await res.json();
  console.log(`Hello from initialProps:${data}`);

  return {
    initialData: data
  };
};
