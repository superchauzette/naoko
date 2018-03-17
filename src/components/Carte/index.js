import React from 'react'
import Nav from './components/Navigation'
import Plats from './components/Plats'

import datas from './data'

const navData = [
  { key: 'horsOeuvre', label: "Hors d'Oeuvre" },
  { key: 'sushi', label: 'Sushi par paire' },
  { key: 'sashimi', label: 'Sashimi par 10pcs' },
]

class Carte extends React.Component {
  state = {
    platsSelected: datas['horsOeuvre'],
  }

  onNavigation = key => this.setState({ platsSelected: datas[key] })

  render() {
    const { platsSelected, keySelected } = this.state

    return (
      <div
        style={{
          padding: '30px',
          backgroundColor: 'rgb(43, 49, 54)',
          minHeight: '100vh',
        }}
      >
        <h1 style={{ color: '#999' }}>Carte</h1>
        <div style={{ marginBottom: '20px' }}>
          <Nav navData={navData} onClick={this.onNavigation} />
        </div>
        <Plats plats={platsSelected} />
      </div>
    )
  }
}

export default Carte
