import React from 'react';

const AboutPodcast = ({ data }) => {
  return (
    <section className="py-16 mx-auto max-w-7xl ">
      <div className="p-12 mx-20 bg-white shadow">
        <div className="mb-10 text-center">
          <h2 className="inline-block px-2 text-3xl font-semibold text-red-400 ">
            About us
          </h2>
        </div>
        <p className="text-gray-700">{data.description}</p>
      </div>
    </section>
  );
};

export default AboutPodcast;
