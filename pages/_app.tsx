import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false;
library.add(fas, fab)

function App({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default App
