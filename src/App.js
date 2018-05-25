import React, {Component} from "react"

class App extends Component{
  render(){

    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav mt-5 nav-pills justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">4</a>
              </li>
            </ul>
            <h6 className="mt-4">1. Введите имя и e-mail</h6>
            <form className="mt-2">
              <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id="formGroupExampleInput" 
                placeholder="Name" 
                style={{width: "300px"}}
                />
              </div>
              <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id="formGroupExampleInput2" 
                placeholder="E-mail" 
                style={{ width: "300px" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
}

export default App
