import fetch from 'isomorphic-unfetch';
import Layout from '../../components/podcastLanding/layout/layout';
import EpisodeShow from '../../components/podcastLanding/episodes/episodeShow';
import { getSubdomain } from '../../utils/subdomain';
import Header from '../../components/podcastLanding/header/header';
import HeaderContentShow from '../../components/podcastLanding/header/headerContentShow';

const EpisodePage = ({ episode, podcast }) => {
  return (
    <Layout>
      <Header data={podcast}>
        <HeaderContentShow episode={episode} podcast={podcast} />
      </Header>
      <EpisodeShow episode={episode} />
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
  const episode = data.episodeDb === null ? data.episodeRss : data.episodeDb;

  return {
    episode,
    podcast: data.podcast,
  };
};
