import React from 'react';

const AboutPodcast = ({ data }) => {
  return (
    <section className="mx-auto sm:py-10 md:py-16 max-w-7xl">
      <div
        className="px-6 pt-6 pb-12 bg-white rounded-t shadow-sm sm:mx-20"
        style={{
          borderBottom: `1px solid ${data.theme.colors.headerBackground}`,
        }}
      >
        <div className="mb-10 text-center">
          <h2
            className={`inline-block px-2 text-xl font-medium md:text-2xl`}
            style={{ color: data.theme.colors.headerText }}
          >
            Welcome to the show
          </h2>
        </div>
        <div
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </section>
  );
};

export default AboutPodcast;
