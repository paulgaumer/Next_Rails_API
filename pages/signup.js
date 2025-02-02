import { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import Router from 'next/router';
import Link from 'next/link';

const signup = async ({ email, password, subdomain }) => {
  const apiUrl = process.env.API_HOST;
  const res = await fetch(`${apiUrl}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
        password,
      },
      subdomain,
    }),
  });
  if (res.status === 200) {
    const token = res.headers.get('Authorization');
    Cookies.set('token', token, { expires: 1 });
    Router.push('/dashboard/onboarding');
    return res;
  } else {
    return res;
  }
};

const SignUpPage = () => {
  const [earlyAccessCode, setEarlyAccessCode] = useState('');
  const [canSignUp, setCanSignUp] = useState(false);
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    email: '',
    password: '',
    subdomain: '',
  });

  useEffect(() => {
    setCanSignUp(earlyAccessCode === process.env.EARLY_ACCESS_CODE);
  }, [earlyAccessCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSignUp) {
      const res = await signup(user);
      const data = await res.json();
      data.errors && setErrors(data.errors);
    } else {
      setErrors([
        '[Incorrect access code] Podwii is still being deployed as a private release. Claim your early access code on https://podwii.com',
      ]);
    }
  };
  // const handleChange = (e) => {
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   setUser({ ...user, [key]: value });
  // };

  return (
    <>
      <Head>
        <title>Sign Up | Podwii</title>
      </Head>
      <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            Create your Podwii account
          </h2>
          <p className="mt-2 text-sm leading-5 text-center text-gray-600 max-w">
            <Link href="/signin">
              <a className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline">
                Already a member? Let's log in!
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            {errors.length >= 1 && (
              <ul className="p-4 mb-4 text-sm text-red-500 border border-red-500 rounded">
                {errors.map((err) => {
                  if (err.includes('Subdomain')) {
                    err.replace('Subdomain', 'Url');
                  }
                  return (
                    <li className="flex items-center">
                      <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="flex-shrink-0 w-6 h-6 mr-2"
                      >
                        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span>
                        {err.includes('Subdomain')
                          ? err.replace('Subdomain', 'This url')
                          : err}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    required
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    required
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="subdomain"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Choose your personal url
                </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <input
                    required
                    id="subdomain"
                    type="text"
                    value={user.subdomain}
                    onChange={(e) =>
                      setUser({ ...user, subdomain: e.target.value })
                    }
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 appearance-none rounded-l-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                  <span className="inline-flex items-center px-3 text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 sm:text-sm">
                    .podwii.com
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="early-code"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Early Access Code
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    required
                    id="early-code"
                    type="password"
                    value={earlyAccessCode}
                    onChange={(e) => setEarlyAccessCode(e.target.value)}
                    className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className={`flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 ${
                      !canSignUp ? 'cursor-not-allowed' : ''
                    }`}
                  >
                    Get started
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
