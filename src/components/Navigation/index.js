import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/logo.png'

const CustomLink = ({ style, to, children }) => (
  <li>
    <div
      style={{
        padding: '6px',
        borderBottom: '0.4px solid #313539',
        textAlign: 'center',
        margin: 0,
        paddingTop: '10px',
        paddingBottom: '10px',
        ...style,
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: 'white',
          cursor: 'pointer',
          textTransform: 'uppercase',
          fontFamily: 'unica one,Arial,Helvetica,sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          letterSpacing: '2px',
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  </li>
)

const Menu = () => (
  <div
    style={{
      backgroundColor: '#292c30',
      color: 'white',
      paddingTop: 30,
      height: '100%',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <img src={logo} />
    </div>
    <ul
      style={{
        listStyleType: 'none',
        margin: 0,
      }}
    >
      <CustomLink to="/" style={{ borderTop: '0.4px solid #313539' }}>
        Acceuil
      </CustomLink>
      <CustomLink to="/carte/">Carte</CustomLink>
      <CustomLink to="/carte/">Menu</CustomLink>
      <CustomLink to="/carte/">Dessert</CustomLink>
      <CustomLink>Boisson</CustomLink>
      <CustomLink>Contact</CustomLink>
    </ul>
  </div>
)

export default Menu
