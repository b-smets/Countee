import 'intl';
import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import localeEN from 'react-intl/locale-data/en';
import { Text } from 'react-native';
import { en } from '../languages/en';

addLocaleData([...localeEN]);

export interface IProps extends React.Props<IProps> {
  locale: string;
}

const messagesForLocale = (locale: string) => {
  switch (locale) {
    default:
      return en;
  }
};

export const TranslationProvider: React.SFC<IProps> = ({ locale, children }) =>
  <IntlProvider locale={locale} messages={messagesForLocale(locale)} textComponent={Text}>
    {children}
  </IntlProvider>
  ;
TranslationProvider.displayName = 'TranslationProvider';
