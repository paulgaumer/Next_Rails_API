import React from 'react';
import { NextSeo } from 'next-seo';

export default () => {
  const title = 'Podwii';
  const description = `The best way to generate an optimized website for your podcast, transcribe your episodes and engage with your audience`;
  const url = `https://podwii.com`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url: url,
        title: title,
        description: description,
        type: 'website',
        site_name: title,
        images: [
          {
            url: '/marketing/banner-seo.png',
            width: 2400,
            height: 1260,
            alt: title,
          },
        ],
      }}
      twitter={{
        handle: '@podwii',
        cardType: 'summary_large_image',
        site: title,
      }}
      facebook={{
        appId: '',
      }}
    />
  );
};
