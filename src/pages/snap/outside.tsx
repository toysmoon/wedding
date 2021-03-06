import { NextPage } from 'next';
import React from 'react';
import Buttons from 'src/components/Album/Buttons';
import Snap from 'src/components/Album/Snap';
import Page from 'src/components/Page';

const albumOrder = [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1];

const Outside: NextPage = () => {
  return (
    <Page padding="1rem">
      <Buttons
        next="/snap/date"
        prev="/snap/studio"
        nextLabel="일상사진"
        prevLabel="웨딩사진"
      />
      {albumOrder.map((count, i) => (
        <Snap
          id={i}
          count={count}
          path={'/images/album/outside'}
          key={`snap-image-${i}`}
        />
      ))}
    </Page>
  );
};

export default Outside;
