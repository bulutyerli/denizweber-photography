import Image from 'next/image';

export default function WebsiteLogo(theme: string) {
  return (
    <Image
      className="h-auto w-auto"
      src={theme === 'dark' ? '/denizweberlogodark.png' : '/denizweberlogo.png'}
      alt="Deniz Weber Logo"
      width={200}
      height={200}
      priority
    />
  );
}
