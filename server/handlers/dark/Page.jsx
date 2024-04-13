import { component } from '@dark-engine/core'

import LinkedData from './LinkedData'
import Canonical from './Canonical'
import Meta from './Meta'

const Page = component(({ currentRoute, currentLanguage, title }) => {
  return (
    <html lang={currentLanguage}>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <base href='/' />
        <title>{title}</title>

        <Meta currentRoute={currentRoute} title={title} />
        <Canonical currentRoute={currentRoute} />
        <LinkedData currentRoute={currentRoute} />

        <link rel='shortcut icon' href='/public/favicon.ico' />
        <script type='module' src='/assets/index.js' defer />
        ___styleTags
      </head>
      <body>
        <div id='dark-root'>___app</div>
      </body>
    </html>
  )
})

export default Page
