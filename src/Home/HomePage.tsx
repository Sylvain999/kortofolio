import React from 'react'
import { useTranslation } from 'react-i18next';

function HomePage(): JSX.Element {
    const { t } = useTranslation();

    return(
        <div className='App-header'>{t('key_welcome')}</div>
    )
}

export default HomePage;