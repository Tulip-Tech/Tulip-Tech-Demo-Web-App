import * as assert from 'assert';

import constants, { longTimeout, normalTimeout } from '#utils/constants';
import { testConfigs } from '#test/constants';
import passwordUtils, { LoginContext } from '#utils/password_utils';

const loginContext: LoginContext = {
  email: passwordUtils.createRandomEmail(),
  password: passwordUtils.createRandomPassword(),
};

Feature('video_detail').retry(Number(process.env.TEST_RETRY_COUNT) || 0);

Before(({ I }) => {
  I.useConfig(testConfigs.cleengAuthvod);
});

Scenario('Video detail screen loads', async ({ I }) => {
  await I.openVideoCard('Agent 327');
  I.see('Agent 327');
  I.see('2021');
  I.see('4m');
  I.see('Action');
  I.see('CC-BY');
  I.see(constants.agent327Description);
  I.see(constants.signUpToWatch);
  I.see('Favorite');
  I.see('Share');
  I.see('Elephants Dream');
  I.see('11 min', { css: 'div[aria-label="Play Elephants Dream"]' });
});

Scenario('I can see an alternate background image for Agent 327', async ({ I }) => {
  await I.openVideoCard('Agent 327');
  await I.seeVideoDetailsBackgroundImage('Agent 327', 'https://img.jwplayer.com/v1/media/uB8aRnu6/images/background.webp?width=1280');
});

Scenario('I can see the default background image for Elephants Dream', async ({ I }) => {
  await I.openVideoCard('Elephants Dream');
  await I.seeVideoDetailsBackgroundImage('Elephants Dream', 'https://cdn.jwplayer.com/v2/media/eFPH2tVG/poster.jpg?width=1280');
});

Scenario('I can expand the description (@mobile-only)', async ({ I }) => {
  await I.openVideoCard('Agent 327');

  function checkHeight(height) {
    // Putting a wait here because the expand / collapse takes a non-zero amount of time
    // and sometimes codecept goes too fast and catches it before it's done animating
    I.wait(1);

    I.seeCssPropertiesOnElements(`text="${constants.agent327Description}"`, { 'max-height': height });
  }

  I.seeElement('div[aria-label="Expand"]');
  I.dontSeeElement('div[aria-label="Collapse"]');
  checkHeight('60px');

  I.click('div[aria-label="Expand"]');

  I.seeElement('div[aria-label="Collapse"]');
  I.dontSeeElement('div[aria-label="Expand"]');
  checkHeight('160px');

  I.click('div[aria-label="Collapse"]');

  I.seeElement('div[aria-label="Expand"]');
  I.dontSeeElement('div[aria-label="Collapse"]');
  checkHeight('60px');
});

Scenario('I can watch a video', async ({ I }) => await playBigBuckBunny(I));

Scenario('I can return to the video detail screen', async ({ I }) => {
  await playBigBuckBunny(I);

  I.click('div[aria-label="Back"]');

  await I.checkPlayerClosed();
  I.see(constants.startWatchingButton);
});

Scenario('I can play other media from the related shelf', async ({ I }) => {
  I.useConfig(testConfigs.basicNoAuth);
  await I.openVideoCard('Agent 327');
  await I.openVideoCard(constants.elephantsDreamTitle);
  I.see(constants.elephantsDreamDescription);
  await I.openVideoCard('Coffee Run');
  I.see('Coffee Run was directed by Hjalti Hjalmarsson and produced by the team at Blender Animation Studio.');
});

Scenario('I can play a trailer', async ({ I }) => {
  await I.openVideoCard(constants.elephantsDreamTitle);

  I.click('Trailer');
  const trailerTitle = `${constants.elephantsDreamTitle} - Trailer`;
  await I.waitForPlayerPlaying(trailerTitle);

  I.clickCloseButton();
  await I.checkPlayerClosed();
  I.dontSee(trailerTitle);
});

Scenario('I can play a trailer without signing in', async ({ I }) => {
  await I.openVideoCard(constants.elephantsDreamTitle);

  I.see(constants.signUpToWatch);
  I.click(constants.signUpToWatch);
  await I.checkPlayerClosed();
  I.waitForText('Email', normalTimeout);
  I.see('Password');
  I.click('div[aria-label=Close]');

  I.click('Trailer');
  await I.waitForPlayerPlaying(`${constants.elephantsDreamTitle} - Trailer`);
});

Scenario('I can play a video after signing up', async ({ I }) => {
  await I.openVideoCard(constants.elephantsDreamTitle);

  I.see(constants.signUpToWatch);
  I.click(constants.signUpToWatch);
  await I.checkPlayerClosed();
  I.see('Email');
  I.see('Password');

  await I.fillRegisterForm(loginContext);

  I.see(constants.startWatchingButton);
  I.dontSee(constants.signUpToWatch);
  I.click(constants.startWatchingButton);

  await I.waitForPlayerPlaying(constants.elephantsDreamTitle);

  I.click('div[aria-label="Back"]');

  await I.checkPlayerClosed();
});

Scenario('I can play a video after signing in', async ({ I }) => {
  await I.openVideoCard(constants.elephantsDreamTitle);

  I.see(constants.signUpToWatch);
  I.click(constants.signUpToWatch);
  await I.checkPlayerClosed();
  I.see('Email');
  I.see('Password');
  I.click('Sign in', constants.registrationFormSelector);
  I.fillField('Email', loginContext.email);
  I.fillField('Password', loginContext.password);
  I.click('button[type=submit]');

  I.see(constants.startWatchingButton);
  I.dontSee(constants.signUpToWatch);
  I.click(constants.startWatchingButton);

  await I.waitForPlayerPlaying(constants.elephantsDreamTitle);

  I.click('div[aria-label="Back"]');

  await I.checkPlayerClosed();
});

Scenario('I can share the media', async ({ I }) => {
  await I.enableClipboard();

  await I.openVideoCard(constants.elephantsDreamTitle);
  const url = await I.grabCurrentUrl();

  // Empty the clipboard
  await I.executeScript(() => navigator.clipboard.writeText(''));
  assert.strictEqual(await I.executeScript(() => navigator.clipboard.readText()), '');

  I.click('Share');
  I.see('Copied url');

  // The url should be copied to the clipboard
  assert.strictEqual(await I.executeScript(() => navigator.clipboard.readText()), url);
  I.waitForInvisible('text="Copied url"', normalTimeout);
});

async function playBigBuckBunny(I) {
  I.useConfig(testConfigs.basicNoAuth);
  await I.openVideoCard(constants.bigBuckBunnyTitle);
  I.waitForText(constants.startWatchingButton, normalTimeout);
  I.dontSeeInCurrentUrl('play=1');
  I.click(constants.startWatchingButton);

  I.seeInCurrentUrl('play=1');

  I.waitForElement('div[class*="jwplayer"]', longTimeout);
  I.waitForElement('video', normalTimeout);

  await I.waitForPlayerPlaying(constants.bigBuckBunnyDescription);
}
