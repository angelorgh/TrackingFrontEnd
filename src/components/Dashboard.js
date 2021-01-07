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
                    <i className="fa fa-clock-o"></i>
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
                  <div class="col">
                    <div class="card shadow border-left-primary py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Orden #190389120</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span class="text-success">Entregado</span></div>
                                </div>
                                {/* <div class="col-auto"><i class="fas fa-info-circle border-danger fa-2x text-gray-300"></i></div> */}
                            </div><span>16/5/2021</span>
                        </div>
                    </div>
                    <div class="card shadow border-left-primary py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Orden #75443532</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span class="text-warning">Procesando</span></div>
                                </div>
                                {/* <div class="col-auto"><i class="fas fa-info-circle fa-2x text-gray-300"></i></div> */}
                            </div><span>21/5/2021</span>
                        </div>
                    </div>
                    <div class="card shadow border-left-primary py-2">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Orden #54642341</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span class="text-info">En Camino</span></div>
                                </div>
                                {/* <div class="col-auto"><i class="fas fa-info-circle fa-2x text-gray-300"></i></div> */}
                            </div><span>22/5/2021</span>
                        </div>
                    </div>
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