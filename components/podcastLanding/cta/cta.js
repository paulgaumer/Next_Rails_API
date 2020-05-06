import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #06beb6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(104, 199, 205, 0.4),
    rgb(127, 221, 217, 0.4)
  );
  background: linear-gradient(
    to right,
    rgb(104, 199, 205, 0.4),
    rgb(127, 221, 217, 0.4)
  );
`;

const MailCta = () => {
  return (
    <Container className="flex justify-center">
      <div className="max-w-screen-xl py-6 mx-20 lg:flex lg:justify-center lg:items-center">
        <div className="text-center">
          <p className="text-lg font-bold leading-9 tracking-tight text-gray-800 sm:leading-10">
            Join the Community
          </p>
        </div>
        <div className="mt-2 lg:mt-0 lg:ml-12">
          <form className="sm:flex">
            <input
              aria-label="Email address"
              type="email"
              required
              className="w-full px-3 py-2 text-sm leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-900 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default MailCta;
