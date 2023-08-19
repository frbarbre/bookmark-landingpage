import { useState } from 'react';

export default function SoMe({ media }: { media: 'facebook' | 'twitter' }) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <img
      src={
        media === 'facebook'
          ? mouseOver
            ? '/icon-facebook-active.svg'
            : '/icon-facebook.svg'
          : media === 'twitter'
          ? mouseOver
            ? '/icon-twitter-active.svg'
            : '/icon-twitter.svg'
          : ''
      }
      alt={`${media}-icon`}
      className='cursor-pointer'
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    />
  );
}
