import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import ErrorPage from '#components/ErrorPage/ErrorPage';
import RootErrorPage from '#components/RootErrorPage/RootErrorPage';
import About from '#src/pages/About/About';
import Home from '#src/pages/Home/Home';
import Search from '#src/pages/Search/Search';
import Series from '#src/pages/Series/Series';
import User from '#src/pages/User/User';
import MediaScreenRouter from '#src/pages/ScreenRouting/MediaScreenRouter';
import PlaylistScreenRouter from '#src/pages/ScreenRouting/PlaylistScreenRouter';
import Layout from '#src/containers/Layout/Layout';
import TermsOfUse from '#src/pages/TermsOfUse';
import PrivacyPolicy from '#src/pages/PrivacyPolicy';
import LandingPage from '#src/pages/LandingPage';
import Booklivestream from '#src/pages/BookLiveStreamForm';
import ThankYouPage from '#src/pages/ThankYouPage/ThankYouPage';
import PlayerHighlights from '#src/pages/PlayerHighlightsForm';

export default function AppRoutes() {
  const { t } = useTranslation('error');

  return (
    <Routes>
      <Route index element={<LandingPage />} />

      <Route element={<Layout />} errorElement={<RootErrorPage />}>
        <Route path="/home" element={<Home />} />
        <Route path="/p/:id" element={<PlaylistScreenRouter />} />
        <Route path="/m/:id/*" element={<MediaScreenRouter />} />
        <Route path="/s/:id/:slug" element={<Series />} />
        <Route path="/q/*" element={<Search />} />
        <Route path="/u/*" element={<User />} />
        <Route path="/o/about" element={<About />} />

        <Route
          path="/*"
          element={<ErrorPage title={t('notfound_error_heading', 'Not found')} message={t('notfound_error_description', "This page doesn't exist.")} />}
        />
      </Route>
      <Route path="/thankYou" element={<ThankYouPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/book-livestream" element={<Booklivestream />} />
      <Route path="/book-player-highlights" element={<PlayerHighlights />} />
    </Routes>
  );
}
