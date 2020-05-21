import React from 'react';
import { NextSeo } from 'next-seo';

export default ({ title, description, subdomain, cover, path }) => {
  const urlPath = path ? path : '';

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`https://${subdomain}.podwii.com${urlPath}`}
      openGraph={{
        url: `https://${subdomain}.podwii.com${urlPath}`,
        title: title,
        description: description,
        type: 'website',
        site_name: title,
        images: [
          {
            url: cover ? cover.url : '',
            alt: title,
            width: 1280,
            height: 720,
          },
        ],
      }}
      twitter={{
        // handle: '@handle',
        // site: '@site',
        cardType: 'summary_large_image',
      }}
      facebook={{
        appId: '',
      }}
    />
  );
};
