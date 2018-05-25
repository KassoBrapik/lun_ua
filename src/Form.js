import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    step: 1
  };

  handleChange = event => {
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = (event) => {
    const step = event.target.getAttribute("data-step")
    this.setState({
      step: step
    });
  };

  render() {
    // console.log(this.state.name, this.state.email);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="mt-2">
              <ul className="nav mt-5 nav-pills justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#"
                    onClick={this.handleClick}
                    data-step={1}
                  >
                    1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.handleClick}>
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

              {this.state.step === 1 ? (
                <div className="step mt-5">
                  <div className="form-group">
                    <label htmlFor="name">Введите имя</label>
                    <input
                      onChange={this.handleChange}
                      name="name"
                      type="text"
                      className="form-control "
                      id="name"
                      placeholder="Имя"
                      style={{ width: "300px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Введите почту</label>
                    <input
                      onChange={this.handleChange}
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Почта"
                      style={{ width: "300px" }}
                    />
                  </div>
                </div>
              ) : null}
              {this.state.step == 2 ? <div className="step">2</div> : null}

              <div className="step">3</div>
              <div className="step">4</div>
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
