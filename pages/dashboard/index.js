import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import NameForm from '../../components/dashboard/nameForm';

const Dashboard = ({ data }) => {
  return (
    <Layout>
      <h1>Welcome to your dashboard {data.user.email}</h1>
      <NameForm podcastName={data.name} />
    </Layout>
  );
};

export default Dashboard;

Dashboard.getInitialProps = async function(ctx) {
  const { token } = nextCookie(ctx);

  const res = await fetch('http://localhost:3000/api/v1/dashboard', {
    method: 'get',
    headers: {
      Authorization: `${token}`
    }
  });
  const data = await res.json();

  return {
    data
  };
};
