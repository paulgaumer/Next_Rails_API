const isEmpty = (item) => {
  return item === '';
};

export const sortDataPodcastLanding = (db, rss) => {
  const dbUserName = `${db.user.first_name} ${db.user.last_name}`;

  return {
    name: isEmpty(db.name) ? rss.title : db.name,
    description: isEmpty(db.description)
      ? podcastRss.description
      : db.description,
    audio_player: db.audio_player,
    subdomain: db.subdomain,
    coverUrl: isEmpty(db.cover_url) ? rss.image.url : db.cover_url,
    episodes: rss.items,
    owner: {
      name: isEmpty(dbUserName) ? rss.itunes.author : dbUserName,
    },
  };
};
