import React from 'react';

const AboutPodcast = ({ data }) => {
  return (
    <section className="mx-auto sm:py-10 md:py-16 max-w-7xl">
      <div className="p-12 bg-white shadow-inner sm:shadow sm:mx-20">
        <div className="mb-10 text-center">
          <h2 className="inline-block px-2 text-2xl font-semibold text-red-400 md:text-3xl ">
            About us
          </h2>
        </div>
        <p className="text-gray-700">{data.description}</p>
      </div>
    </section>
  );
};

export default AboutPodcast;
