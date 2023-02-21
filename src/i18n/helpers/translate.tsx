import { FormattedMessage } from 'react-intl';

export const translate = (id: string, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;
