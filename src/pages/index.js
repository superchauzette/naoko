import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/acceuil.jpeg'

export const ImageBackground = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      padding: 0,
      color: 'white',
    }}
  >
    <h1
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: '100%',
        height: '100%',
        marginTop: '-40px',
        fontSize: '46px',
        fontWeight: 900,
        letterSpacing: '4px',
      }}
    >
      NAOKO
    </h1>

    <h2
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: '100%',
        height: '100%',
        marginTop: '10px',
        fontSize: '26px',
        fontWeight: 500,
        letterSpacing: '2px',
      }}
    >
      Cuisine traditionelle japonaise
    </h2>

    <div style={{ position: 'absolute', right: 40, top: 60 }}>
      <p>06 01 40 71 70</p>
    </div>

    <div style={{ position: 'absolute', right: 40, top: 100 }}>
      <p>
        20 rue de Clery <br />
        78570 Andresy
      </p>
    </div>

    <img src={logo} style={{ height: '100vh', width: '100%' }} />
  </div>
)

const IndexPage = () => (
  <div style={{ padding: 0, margin: 0 }}>
    <ImageBackground />
    <div style={{ padding: '20px' }}>
      <h3>Horaires</h3>
      Ouvert 7j/7
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur
        exercitationem sapiente ex explicabo consequatur adipisci doloribus.
        Excepturi, error aspernatur dolorum totam placeat quos quae molestias
        asperiores deleniti sed molestiae. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. In tenetur exercitationem sapiente ex
        explicabo consequatur adipisci doloribus. Excepturi, error aspernatur
        dolorum totam placeat quos quae molestias asperiores deleniti sed
        molestiae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
        tenetur exercitationem sapiente ex explicabo consequatur adipisci
        doloribus. Excepturi, error aspernatur dolorum totam placeat quos quae
        molestias asperiores deleniti sed molestiae.
      </p>
    </div>
    <div
      style={{
        backgroundColor: 'rgb(64, 64, 78)',
        color: 'white',
        padding: '20px',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur
      exercitationem sapiente ex explicabo consequatur adipisci doloribus.
      Excepturi, error aspernatur dolorum totam placeat quos quae molestias
      asperiores deleniti sed molestiae. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. In tenetur exercitationem sapiente ex explicabo
      consequatur adipisci doloribus. Excepturi, error aspernatur dolorum totam
      placeat quos quae molestias asperiores deleniti sed molestiae. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. In tenetur exercitationem
      sapiente ex explicabo consequatur adipisci doloribus. Excepturi, error
      aspernatur dolorum totam placeat quos quae molestias asperiores deleniti
      sed molestiae.
    </div>
  </div>
)

export default IndexPage
