import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locale/en';
import es from './locale/es';
import pt from './locale/pt';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
    I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
    en,
    es,
    pt,
};

export default I18n;
