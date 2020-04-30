import fetch from 'isomorphic-unfetch';

const Auth = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.API_HOST;
    const res = await fetch(`${apiUrl}/api/v1/fetch_instagram`, {
      method: 'get',
    });
    const data = await res.json();
  };

  return (
    <div>
      <p>Auth</p>

      <button onClick={handleClick} className="p-4 border">
        Fetch Instagram
      </button>
    </div>
  );
};

export default Auth;
