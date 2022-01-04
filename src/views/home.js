import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>District Web Analyst</title>
        <meta property="og:title" content="District Web Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
