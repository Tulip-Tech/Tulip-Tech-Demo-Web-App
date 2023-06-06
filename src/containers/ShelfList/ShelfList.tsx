import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import shallow from 'zustand/shallow';
import InfiniteScroll from 'react-infinite-scroller';
import { useNavigate } from 'react-router';

import { PlaylistContainer, PlaylistContainerLive } from '../PlaylistContainer/PlaylistContainer';

import styles from './ShelfList.module.scss';

import { useAccountStore } from '#src/stores/AccountStore';
import { PersonalShelf, useConfigStore } from '#src/stores/ConfigStore';
import ShelfComponent from '#components/Shelf/Shelf';
import ShelfLive from '#src/components/ShelfLive/ShelfLive';
import { feedURL, mediaURL, slugify } from '#src/utils/formatting';
import type { Content } from '#types/Config';
import { useWatchHistoryStore } from '#src/stores/WatchHistoryStore';
import { parseAspectRatio, parseTilesDelta } from '#src/utils/collection';
import InfiniteScrollLoader from '#components/InfiniteScrollLoader/InfiniteScrollLoader';
import { testId } from '#src/utils/common';

const INITIAL_ROW_COUNT = 25;
const LOAD_ROWS_COUNT = 25;

type Props = {
  rows: Content[];
};

const ShelfList = ({ rows }: Props) => {
  const navigate = useNavigate();
  const { accessModel } = useConfigStore(({ accessModel }) => ({ accessModel }), shallow);
  const [rowCount, setRowCount] = useState(INITIAL_ROW_COUNT);

  const watchHistoryDictionary = useWatchHistoryStore((state) => state.getDictionary());

  // User
  const { user, subscription } = useAccountStore(({ user, subscription }) => ({ user, subscription }), shallow);

  const onFeaturedCardClick = useCallback(
    (Playlist) => {
      navigate(mediaURL(Playlist));
    },
    [navigate],
  );
  const onCardClick = useCallback(
    (playlistItem) => {
      navigate(feedURL(playlistItem));
    },
    [navigate],
  );

  useEffect(() => {
    // reset row count when the page changes
    setRowCount(INITIAL_ROW_COUNT);
  }, [rows]);

  return (
    <div className={styles.home}>
      <InfiniteScroll
        pageStart={0}
        style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
        loadMore={() => setRowCount((current) => current + LOAD_ROWS_COUNT)}
        hasMore={rowCount < rows.length}
        role="grid"
        loader={<InfiniteScrollLoader key="loader" />}
      >
        {rows.slice(0, 1).map((row, index) => (
          <PlaylistContainerLive type={row.type} playlistId={row.contentId} key={`${row.contentId || row.type}_${index}`}>
            {({ playlist, error, isLoading, style }) => {
              const title = row?.title || playlist.title;
              const posterAspect = parseAspectRatio(playlist.shelfImageAspectRatio);
              const visibleTilesDelta = parseTilesDelta(posterAspect);

              return (
                <div
                  style={style}
                  role="row"
                  className={classNames(styles.shelfContainer, { [styles.featured]: row.featured })}
                  data-testid={testId(`shelf-${row.featured ? 'featured' : row.type !== 'playlist' ? row.type : slugify(title)}`)}
                >
                  <div role="cell">
                    <ShelfComponent
                      loading={isLoading}
                      error={error}
                      type={row.type}
                      playlist={playlist}
                      watchHistory={row.type === PersonalShelf.ContinueWatching ? watchHistoryDictionary : undefined}
                      onCardClick={onFeaturedCardClick}
                      title={title}
                      featured={row.featured === true}
                      accessModel={accessModel}
                      isLoggedIn={!!user}
                      hasSubscription={!!subscription}
                      posterAspect={posterAspect}
                      visibleTilesDelta={visibleTilesDelta}
                    />
                  </div>
                </div>
              );
            }}
          </PlaylistContainerLive>
        ))}

        {rows.slice(1, 2).map((row, index) => (
          <PlaylistContainerLive type={row.type} playlistId={row.contentId} key={`${row.contentId || row.type}_${index}`}>
            {({ playlist, error, isLoading, style }) => {
              const title = row?.title || playlist.title;
              const posterAspect = parseAspectRatio(playlist.shelfImageAspectRatio);
              const visibleTilesDelta = parseTilesDelta(posterAspect);

              return (
                <div
                  style={style}
                  role="row"
                  className={classNames(styles.shelfContainer1, { [styles.featured]: row.featured })}
                  data-testid={testId(`shelf-${row.featured ? 'featured' : row.type !== 'playlist' ? row.type : slugify(title)}`)}
                >
                  <div role="cell" className={styles.live}>
                    <ShelfLive
                      loading={isLoading}
                      error={error}
                      type={row.type}
                      playlist={playlist}
                      watchHistory={row.type === PersonalShelf.ContinueWatching ? watchHistoryDictionary : undefined}
                      onCardClick={onFeaturedCardClick}
                      title={title}
                      featured={row.featured === true}
                      accessModel={accessModel}
                      isLoggedIn={!!user}
                      hasSubscription={!!subscription}
                      posterAspect={posterAspect}
                      visibleTilesDelta={visibleTilesDelta}
                    />
                  </div>
                </div>
              );
            }}
          </PlaylistContainerLive>
        ))}
        <div className={styles.row}>
          {rows.slice(2, rowCount).map((row, index) => (
            <PlaylistContainer type={row.type} playlistId={row.contentId} key={`${row.contentId || row.type}_${index}`}>
              {({ playlist, error, isLoading, style }) => {
                const title = row?.title || playlist.title;
                const posterAspect = parseAspectRatio(playlist.shelfImageAspectRatio);
                const visibleTilesDelta = parseTilesDelta(posterAspect);
                if (row.type == 'favorites') {
                  return (
                    <div
                      style={style}
                      role="row"
                      className={classNames(styles.shelfContainer, { [styles.featured]: row.featured })}
                      data-testid={testId(`shelf-${slugify(title)}`)}
                    >
                      <div role="cell">
                        <ShelfLive
                          loading={isLoading}
                          error={error}
                          type={row.type}
                          playlist={playlist}
                          onCardClick={onFeaturedCardClick}
                          title={title}
                          featured={row.featured === true}
                          accessModel={accessModel}
                          isLoggedIn={!!user}
                          hasSubscription={!!subscription}
                          posterAspect={posterAspect}
                          visibleTilesDelta={visibleTilesDelta}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      style={style}
                      role="row"
                      className={classNames(styles.shelfContainer, { [styles.featured]: row.featured })}
                      data-testid={testId(`shelf-${row.featured ? 'featured' : row.type !== 'playlist' ? row.type : slugify(title)}`)}
                    >
                      <div role="cell">
                        <ShelfComponent
                          loading={isLoading}
                          error={error}
                          type={row.type}
                          playlist={playlist}
                          watchHistory={row.type === PersonalShelf.ContinueWatching ? watchHistoryDictionary : undefined}
                          onCardClick={onCardClick}
                          title={title}
                          featured={row.featured === true}
                          accessModel={accessModel}
                          isLoggedIn={!!user}
                          hasSubscription={!!subscription}
                          posterAspect={posterAspect}
                          visibleTilesDelta={visibleTilesDelta}
                        />
                      </div>
                    </div>
                  );
                }
              }}
            </PlaylistContainer>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ShelfList;
