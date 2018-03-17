import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.png'
import livraison from '../img/livraison.png'
import acceuil from '../img/acceuil.jpeg'

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

    <div
      style={{
        position: 'absolute',
        right: 40,
        top: 60,
      }}
    >
      <p>
        <a
          style={{ color: 'white', textDecoration: 'none' }}
          href="tel:0980788675"
        >
          09 80 78 86 75{' '}
        </a>/
        <a
          style={{ color: 'white', textDecoration: 'none' }}
          href="tel:0601407170"
        >
          {' '}
          06 01 40 71 70
        </a>
      </p>
    </div>

    <div
      style={{
        position: 'absolute',
        right: 40,
        top: 100,
      }}
    >
      <p style={{ textAlign: 'right' }}>
        Centre commercial des charvaux<br />
        55 Avenue des robaresses<br />
        78570 Andrésy
      </p>
    </div>

    <img src={acceuil} style={{ height: '100vh', width: '100%' }} />
  </div>
)

const IndexPage = () => (
  <div style={{ padding: 0, margin: 0 }}>
    <ImageBackground />
    <div
      style={{
        padding: '50px',
        paddingLeft: '100px',
        backgroundColor: '#313539',
        color: '#999999',
      }}
    >
      <h3
        style={{
          color: 'white',
          marginBottom: '5px',
          fontSize: '31.403px',
          lineHeight: '41.871px',
          fontWeight: 400,
          fontFamily: 'Arial,Helvetica,sans-serif',
        }}
      >
        Horaires
      </h3>
      <h4 style={{ color: '#e85735' }}>Ouvert 7j/7</h4>
      <p style={{ marginBottom: '5px' }}> 11h00 - 14:30</p>
      <p style={{ marginBottom: '5px' }}>18h00 - 22:30</p>
      <p style={{ marginBottom: '5px' }}>Fermé le dimanche midi</p>
    </div>

    <div
      style={{
        padding: '50px',
        paddingLeft: '100px',
        backgroundColor: 'rgb(43, 49, 54)',
        color: '#999999',
      }}
    >
      <h3
        style={{
          color: 'white',
          marginBottom: '5px',
          fontSize: '31.403px',
          lineHeight: '41.871px',
          fontWeight: 400,
          fontFamily: 'Arial,Helvetica,sans-serif',
          marginBottom: '15px',
        }}
      >
        Livraison Gratuite
      </h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img style={{ marginRight: '300px' }} src={livraison} />
        <div>
          <p>à domicile à partir de 20€</p>
          <p>au bureau à partir de 40€ </p>
          <p>1 bière Japonaise offerte</p>
        </div>
      </div>
    </div>

    <div
      style={{
        backgroundColor: '#313539',

        color: 'white',
        padding: '60px',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
      >
        <img src={logo} />
      </div>
      <div style={{ color: '#8c8989', fontSize: '12px' }}>
        <p>© 2018 Naoko | Tout droits réservés</p>
        <p>
          Pour votre santé, pratiquez une activité physique régulière{' '}
          <a
            style={{
              color: '#bfbfbf',
              fontSize: '12px',
              textDecoration: 'none',
            }}
            href="http://www.mangerbouger.fr/ "
          >
            www.mangerbouger.fr
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default IndexPage
