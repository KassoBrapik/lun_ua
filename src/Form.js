import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="mt-2">
              <ul className="nav mt-5 nav-pills justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    3
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    4
                  </a>
                </li>
              </ul>
              <div className="step mt-5">
                <div className="form-group">
                  <label
                    for="name"
                  >Введите имя
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="name"
                    placeholder="Имя"
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="email"
                  >Введите почту
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Почта"
                    style={{ width: "300px" }}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button type="button" className="btn btn-secondary mr-4">
                  Предыдущий
                </button>
                <button type="button" className="btn btn-primary">
                  Следующий
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
