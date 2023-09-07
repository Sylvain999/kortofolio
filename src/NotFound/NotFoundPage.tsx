import React from 'react'
import { useTranslation } from 'react-i18next';

function NotFoundPage(): JSX.Element {
    const { t } = useTranslation();

    return(
        <div>{t('key_not_found')}</div>
    )
}

export default NotFoundPage;