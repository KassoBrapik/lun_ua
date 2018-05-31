import React, { Component } from "react";
import ButtonsTop from "./ButtonsTop";

class Form extends Component {
  state = {
    name: "",
    email: "",
    country: "",
    step: 1,
    errorsName: {},
    errorsEmail: {}
  };

  validate = () => {
    const newErrorsName = {};
    const newErrorsEmail = {};
    if (this.state.name == "") {
      newErrorsName.name = "Вы не ввели имя пользователя";
    }
    if (this.state.email == "") {
      newErrorsEmail.email = "Вы не ввели email";
    }
    if (Object.keys(newErrorsName).length > 0 || Object.keys(newErrorsEmail).length) {
      this.setState({
        errorsName: newErrorsName,
        errorsEmail: newErrorsEmail
      });

      return false;
    }

    return true;
  };

  handleChange = event => {
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      errors: {}
    });
  };

  handleClick = event => {
    const step = Number(event.target.getAttribute("data-step"));
    if (this.validate()) {
      this.setState({
        step: step
      });
    }
  };

  handleClickButtonNext = () => {
    if (this.validate()) {
      this.setState({
        step: this.state.step + 1
      });
    }
  };
  handleClickButtonPrevious = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

  getOptionsCountries = () => {
    const options = [];
    for (let key in this.props.countries) {
      options.push({
        value: key,
        label: this.props.countries[key]
      });
    }

    return options.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
 
  };

  getOptionsCities = country => {
    const options = [];
    for (let key in this.props.cities) {
      // console.log(keyCity);
      if (this.props.cities[key].country == country) {
        options.push({
          value: key,
          label: this.props.cities[key].name
        });
      }
    }
    return options.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
  };

  render() {
    console.log(this.state.errors)
    // console.log(this.state.name, this.state.email);
    // console.log(this.state.step);
    // console.log(this.props)
    const optionsCountries = this.getOptionsCountries();
    const optionsCities = this.getOptionsCities(this.state.country);
    // console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="mt-2">
              <ButtonsTop
                step={this.state.step}
                handleClick={this.handleClick}
              />
              {this.state.step === 1 ? (
                <div className="step mt-5">
                  <div className="form-group">
                    <label htmlFor="name">Введите имя</label>
                    <input
                      onChange={this.handleChange}
                      name="name"
                      type="text"
                      className={`form-control ${Object.keys(this.state.errorsName).length > 0 ? `form-control-errors` : null}`}
                      id="name"
                      placeholder="Имя"
                      style={{ width: "300px" }}
                    />
                    {this.state.errorsName.name || this.state.errorsEmail.email ? (
                      <div className="validation">
                      {this.state.errorsName.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Введите почту</label>
                    <input
                      onChange={this.handleChange}
                      name="email"
                      type="text"
                      className={`form-control ${Object.keys(this.state.errorsEmail).length > 0 ? `form-control-errors` : null}`}
                      id="email"
                      placeholder="Почта"
                      style={{ width: "300px" }}
                    />
                    {this.state.errorsName.name || this.state.errorsEmail.email ? (
                      <div className="validation">
                        {this.state.errorsEmail.email}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {this.state.step === 2 ? (
                <div className="step mt-5">
                  <div className="form-group">
                    <label htmlFor="country">Выберите страну</label>
                    <select
                      onChange={this.handleChange}
                      name="country"
                      value={this.state.country}
                      className="form-control "
                      id="country"
                      placeholder="Страна"
                      style={{ width: "300px" }}
                    >
                      {optionsCountries}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">Выберите город</label>
                    <select
                      onChange={this.handleChange}
                      name="city"
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Город"
                      style={{ width: "300px" }}
                    >
                      {optionsCities}
                    </select>
                  </div>
                </div>
              ) : null}
              {this.state.step === 3 ? (
                <div className="step mt-5">3</div>
              ) : null}
              {this.state.step === 4 ? (
                <div className="step mt-5">4</div>
              ) : null}
              <div className="mt-5 text-center">
                <button
                  type="button"
                  className="btn btn-secondary mr-4"
                  disabled={this.state.step === 1}
                  onClick={this.handleClickButtonPrevious}
                >
                  Предыдущий
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleClickButtonNext}
                  onChange={this.handleChangeValidation}
                >
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
