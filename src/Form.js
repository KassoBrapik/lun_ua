import React, { Component } from "react";
import ButtonsTop from "./ButtonsTop"
import ContentForm from "./ContentForm"

class Form extends Component {
  state = {
    name: "",
    email: "",
    country: "1",
    step: 1,
    errors: {}
  };

  validate = () => {
    const newErrors = {};
    if (this.state.name == "") {
      newErrors.name = "Вы не ввели имя пользователя";
    }
    if (this.state.email == "") {
      newErrors.email = "Вы не ввели email";
    }
    if (Object.keys(newErrors).length > 0) {
      this.setState({
        errors: newErrors
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

              <ContentForm 
              step={this.state.step}
              handleChange={this.handleChange}
              errors={this.state.errors}
              country={this.state.country}
              />

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
