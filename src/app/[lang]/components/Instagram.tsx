import { Link } from '@nextui-org/react';
import { PiInstagramLogo } from 'react-icons/pi';

export default function Instagram() {
  return (
    <div className="flex items-center gap-5 mb-20">
      <Link
        className="flex items-center gap-5"
        isExternal
        underline="hover"
        href={'https://www.instagram.com/deewbr/'}
      >
        <PiInstagramLogo size={38} />
        <p className="text-foreground-600 tracking-widest">INSTAGRAM</p>
      </Link>
      <Link isExternal href={'https://www.instagram.com/deewbr/'}>
        <p className="text-secondary">@deewbr</p>{' '}
      </Link>
    </div>
  );
}
