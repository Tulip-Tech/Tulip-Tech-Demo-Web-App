import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import shallow from 'zustand/shallow';

import styles from './Search.module.scss';

import { useUIStore } from '#src/stores/UIStore';
import { mediaURL } from '#src/utils/formatting';
import { useAccountStore } from '#src/stores/AccountStore';
import { useConfigStore } from '#src/stores/ConfigStore';
import useFirstRender from '#src/hooks/useFirstRender';
import type { PlaylistItem } from '#types/playlist';
import useSearchQueryUpdater from '#src/hooks/useSearchQueryUpdater';
import CardGrid from '#components/CardGrid/CardGrid';
import ErrorPage from '#components/ErrorPage/ErrorPage';
import usePlaylist from '#src/hooks/usePlaylist';

const Search = () => {
  const { t } = useTranslation('search');
  const { config, accessModel } = useConfigStore(({ config, accessModel }) => ({ config, accessModel }), shallow);
  const { siteName, features } = config;

  const firstRender = useFirstRender();
  const searchQuery = useUIStore((state) => state.searchQuery);
  const { updateSearchQuery } = useSearchQueryUpdater();
  const navigate = useNavigate();
  const params = useParams();
  const query = params['*'];
  const { isFetching, error, data: playlist } = usePlaylist(features?.searchPlaylist || '', { search: query || '' }, true, !!query);

  // User
  const { user, subscription } = useAccountStore(({ user, subscription }) => ({ user, subscription }), shallow);

  // Update the search bar query to match the route param on mount
  useEffect(() => {
    if (!firstRender) {
      return;
    }

    if (query && query !== searchQuery) {
      updateSearchQuery(query);
    }
  }, [firstRender, query, searchQuery, updateSearchQuery]);

  const onCardClick = (playlistItem: PlaylistItem) => {
    useUIStore.setState({
      searchQuery: '',
      searchActive: false,
    });

    navigate(mediaURL(playlistItem, features?.searchPlaylist));
  };

  if ((error || !playlist) && !isFetching) {
    return (
      <ErrorPage title={t('error_heading')}>
        <h6>{t('error_subheading')}</h6>
        <p>{t('error_description')}</p>
      </ErrorPage>
    );
  }

  if (!query) {
    return <ErrorPage title={t('start_typing')} />;
  }

  if (!playlist?.playlist.length) {
    return (
      <ErrorPage title={t('no_results_heading', { query })}>
        <h6>{t('suggestions')}</h6>
        <ul>
          <li>{t('tip_one')}</li>
          <li>{t('tip_two')}</li>
          <li>{t('tip_three')}</li>
        </ul>
      </ErrorPage>
    );
  }

  return (
    <div className={styles.search}>
      <Helmet>
        <title>
          {t('title', { results: playlist.playlist.length, query })} - {siteName}
        </title>
      </Helmet>
      <header className={styles.header}>
        <h2>{t('heading')}</h2>
      </header>
      <main className={styles.main}>
        <CardGrid
          playlist={playlist}
          onCardClick={onCardClick}
          isLoading={firstRender}
          accessModel={accessModel}
          isLoggedIn={!!user}
          hasSubscription={!!subscription}
        />
      </main>
    </div>
  );
};

export default Search;
