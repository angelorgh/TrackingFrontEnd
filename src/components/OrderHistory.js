import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import face3 from "../assets/img/faces/face-3.jpg"

class OrderHistory extends Component {
  render() {
    return (
      <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card ">
              <div className="card-header ">
                <h4 className="card-title">Historial De Ordenes</h4>
              </div>
              <div className="card-body ">
                <div className="ordertable">
                  
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

export default OrderHistory