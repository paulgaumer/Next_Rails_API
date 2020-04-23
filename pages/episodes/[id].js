import fetch from 'isomorphic-unfetch';
import Layout from '../../components/podcastLanding/layout/layout';
import { getSubdomain } from '../../utils/subdomain';

const EpisodePage = ({ episode }) => {
  const ep =
    episode.episodeDb === null ? episode.episodeRss : episode.episodeDb;
  return (
    <Layout>
      <p>{ep.title}</p>
    </Layout>
  );
};

export default EpisodePage;

EpisodePage.getInitialProps = async function (ctx) {
  const { id } = ctx.query;
  const subdomain = getSubdomain(ctx.req);
  const apiUrl = process.env.API_HOST;

  const res = await fetch(`${apiUrl}api/v1/landing/${subdomain}/${id}`, {
    method: 'get',
  });
  const data = await res.json();

  return {
    episode: data,
  };
};
