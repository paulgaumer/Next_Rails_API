import Cookies from 'js-cookie';

export const editPodcast = async (info) => {
  const apiUrl = process.env.API_HOST;
  const token = Cookies.get('token');
  const res = await fetch(`${apiUrl}/api/v1/dashboard/edit`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      podcast: { ...info },
    }),
  });
  return res.status;
};

export const createEpisode = async (info) => {
  const apiUrl = process.env.API_HOST;
  const token = Cookies.get('token');
  const res = await fetch(`${apiUrl}/api/v1/episodes`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      episode: { ...info },
    }),
  });
  return res.status;
};

export const updateEpisode = async (info, episodeId) => {
  const apiUrl = process.env.API_HOST;
  const token = Cookies.get('token');
  const res = await fetch(`${apiUrl}/api/v1/episodes/${episodeId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      episode: { ...info },
    }),
  });
  return res.status;
};
