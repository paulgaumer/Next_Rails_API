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
