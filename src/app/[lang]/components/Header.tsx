import { getDictionary } from '@/lib/dictionary';
import Nav from './Nav';

export default async function Header({ lang }: { lang: string }) {
  const { navigation } = await getDictionary(lang);
  return <Nav navigation={navigation} lang={lang} />;
}
