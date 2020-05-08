import React, { useContext } from 'react';
import { GlobalStateContext } from '../../../context/globalContextProvider';
import { themeOn, themeOff } from '../../../utils/themeHandlers';

const AboutPodcast = ({ data }) => {
  const { theme, isThemed } = useContext(GlobalStateContext);
  const colors = isThemed ? theme.colors : '';

  return (
    <section className="mx-auto sm:py-10 md:py-16 max-w-7xl">
      <div className="p-12 bg-white shadow-inner sm:shadow sm:mx-20">
        <div className="mb-10 text-center">
          <h2
            className={`inline-block px-2 text-2xl font-semibold md:text-3xl ${themeOff(
              isThemed,
              'text-red-400'
            )}`}
            style={{ color: themeOn(isThemed, colors.primary) }}
          >
            About us
          </h2>
        </div>
        <p className="text-gray-700">{data.description}</p>
      </div>
    </section>
  );
};

export default AboutPodcast;
