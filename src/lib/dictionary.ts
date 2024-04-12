import 'server-only';

interface Dictionaries {
  [key: string]: () => Promise<any>;
}

const dictionaries: Dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  tr: () => import('../dictionaries/tr.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
