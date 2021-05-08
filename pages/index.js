import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';

import HeadingContainer from '../src/components/heading-container/heading-container';
import MovieResultsContainer from '../src/components/movie-results-container/movie-results-container';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'black'
  }
}))

export default function Home() {
  const classes = useStyles(); 
  return (
    <div className={classes.container}>
      <Head>
        <title>Shopify - Shoppies: Movie Awards</title>
        <meta name="description" content="Movie Award Nominations" />
        <link rel="icon" href="/movie-favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>
      <HeadingContainer 
        backgroundImage='black-leaf-background.jpg' 
        title='The Shoppies'
        subText='Movie Awards'
        searchBar
      />
      <MovieResultsContainer page={'main'}/>
    </div>
  )
}
