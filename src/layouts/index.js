import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation'

import './index.css'

const styles = {
  nav: {
    position: 'fixed',
    width: '20%',
    top: 0,
    bottom: 0,
  },
  main: {
    width: '80%',
    marginLeft: '20%',
  },
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Naoko"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Unica+One',
          rel: 'stylesheet',
        },
      ]}
    />
    <div style={styles.nav}>
      <Navigation />
    </div>
    <div style={styles.main}>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
