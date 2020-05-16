import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  color: ${(props) => props.textColor};
  background: ${(props) => props.backgroundColor};

  & > div {
    border-top: 2px dotted ${(props) => props.textColor};
  }

  button {
    background: ${(props) => props.textColor};
  }
`;

const MailCta = ({ data }) => {
  const apiUrl = process.env.API_HOST;
  const [email, setEmail] = useState('');
  const [podcast_id] = useState(data.id);
  const [headerTextColor] = useState(data.theme.colors.headerText);
  const [headerBackgroundColor] = useState(data.theme.colors.headerBackground);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${apiUrl}api/v1/crm_items`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        crm_item: { email, podcast_id },
      }),
    });
    const resData = await res.json();
    // res.status === 200 ? setEmail('') : console.log(resData);
  };

  return (
    <Container
      className="flex justify-center"
      textColor={headerTextColor}
      backgroundColor={headerBackgroundColor}
    >
      <div className="max-w-screen-xl pt-6 pb-6 mt-6 sm:px-20 lg:flex lg:justify-center lg:items-center">
        <div className="text-center">
          <p className="text-lg font-bold leading-9 tracking-tight sm:leading-10">
            Never miss our updates
          </p>
        </div>
        <div className="mt-2 lg:mt-0 lg:ml-12">
          <form className="relative sm:flex" onSubmit={handleSubmit}>
            <input
              aria-label="Email address"
              type="email"
              value={email}
              required
              className="w-full py-2 pl-3 pr-12 text-sm leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none sm:px-3 focus:outline-none focus:placeholder-gray-400 sm:max-w-xs"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="absolute w-6 h-6 text-gray-900 right-2 sm:hidden"
              style={{ top: '10px' }}
            >
              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div className="hidden mt-3 rounded-md shadow sm:block sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default MailCta;
