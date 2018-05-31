import React, {Component} from "react"

class ContentForm extends Component {

  render(){

    return(

      console.log(this.props)
      <div>
        {this.props.step === 1 ? (
            <div className="step mt-5">
              <div className="form-group">
                <label htmlFor="name">Введите имя</label>
                <input
                  onChange={this.props.handleChange}
                  name="name"
                  type="text"
                  className="form-control "
                  id="name"
                  placeholder="Имя"
                  style={{ width: "300px" }}
                />
                {this.props.errors.name ? (
                  <div className="validation">{this.props.errors.name}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Введите почту</label>
                <input
                  onChange={this.props.handleChange}
                  name="email"
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Почта"
                  style={{ width: "300px" }}
                />
                {this.props.errors.email ? (
                  <div className="validation">
                    {this.props.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null
        }
        {this.props.step === 2 ? (
        <div className="step mt-5">
          <div className="form-group">
            <label htmlFor="country">Выберите страну</label>
            <select
              onChange={this.props.handleChange}
              name="country"
              value={this.props.country}
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
              onChange={this.props.handleChange}
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
      {this.props.step === 3 ? (
          <div className="step mt-5">3</div>
        ) : null}
      {this.props.step === 4 ? (
          <div className="step mt-5">4</div>
        ) : null}
    </div>

    )

  }
  
}

export default ContentForm 