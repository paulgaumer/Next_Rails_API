import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import Link from 'next/link';
import NameForm from '../../components/dashboard/nameForm';

const Dashboard = ({ data }) => {
  return (
    <Layout>
      <h1>Welcome to your dashboard {data.user.email}</h1>
      <NameForm podcastName={data.name} />

      <h2>Here is your Landing Page</h2>
      <Link href="/[podcast]" as={`/${data.name}`} target="_blank">
        <a>{data.name}</a>
      </Link>
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
  console.log(data);

  return {
    data
  };
};
