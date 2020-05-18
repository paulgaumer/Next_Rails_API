import React from 'react';
// import transistorLogo from '../../../public/marketing/transistor-logo.svg';
// import buzzsproutLogo from '../../../public/marketing/buzzsprout-logo.svg';
// import podbeanLogo from '../../../public/marketing/podbean-logo.png';
// import anchorLogo from '../../../public/marketing/anchor-logo.svg';
// import soundcloudLogo from '../../../public/marketing/soundcloud-logo.svg';

const LogoCloud = () => {
  return (
    <div id="integration" className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <p className="text-base font-semibold leading-6 tracking-wider text-center text-gray-600 uppercase font-titleMarketing">
          Fast integration with most podcast hosting services
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/buzzsprout-logo.svg"
              alt="buzzsprout"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/transistor-logo.svg"
              alt="transistor"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/podbean-logo.png"
              alt="podbean"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/anchor-logo.svg"
              alt="anchor"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/marketing/soundcloud-logo.svg"
              alt="soundcloud"
            />
          </div>
          <div className="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50">
            <p className="text-lg text-gray-400 font-titleMarketing group">
              And yours?{' '}
              <a
                href="mailto:contact@podwii.com?subject=Tell me more about Podwii"
                className="inline-block text-purple-600 underline transform group-hover:scale-105"
              >
                Ask us!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
