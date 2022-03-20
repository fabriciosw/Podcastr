import '../styles/global.scss'
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import Skeleton from 'react-shimmer-skeleton';

const fakeEpisode = {
  id: 'string',
    title: 'string',
    thumbnail: 'string',
    members: 'string',
    duration: '100',
    durationAsString: 'string',
    publishedAt: 'string',
    url: 'string',
}

function MyApp({ Component, pageProps }) {
  return(
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps}/>
        </main>
        {/* <Skeleton isLoading={true} component={Player} exampleProps={fakeEpisode} defaultStyles={undefined} className={''}> */}
        <Player/>
        {/* </Skeleton> */}
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp