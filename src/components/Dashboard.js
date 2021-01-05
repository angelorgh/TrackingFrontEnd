import React, { Component } from 'react'
//import ChartistGraph from 'react-chartist'
import MapSection from './Map'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-8">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Mapa de Ordenes</h4>
                </div>
                <div className="card-body ">
                  <div className="map">
                  <MapSection location={location} zoomLevel={17} />
                  </div>
                  <div className="stats">
                    <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Ordenes Activas</h4>
                </div>
                <div className="card-body ">
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                    <i className="fa fa-circle text-danger"></i> Click
                    <i className="fa fa-circle text-warning"></i> Click Second Time
                </div>
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard