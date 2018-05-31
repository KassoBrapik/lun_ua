import React, {Component} from "react"


class ButtonsTop extends Component {
  state = {
  };
  
  render(){

    return (

      <div
        className="btn-toolbar step mt-5"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div
          className="btn-group mr-2"
          role="group"
          aria-label="First group"
        >
          <button
            type="button"
            className={`btn mr-1 btn-secondary ${
              this.props.step === 1 ? `btn-active` : null
              }`}
            data-step={1}
            onClick={this.props.handleClick}
          >
            1
                  </button>
          <button
            type="button"
            className={`btn mr-1 btn-secondary ${
              this.props.step === 2 ? `btn-active` : null
              }`}
            data-step={2}
            onClick={this.props.handleClick}
          >
            2
                  </button>
          <button
            type="button"
            className={`btn mr-1 btn-secondary ${
              this.props.step === 3 ? `btn-active` : null
              }`}
            data-step={3}
            onClick={this.props.handleClick}
          >
            3
                  </button>
          <button
            type="button"
            className={`btn btn-secondary ${
              this.props.step === 4 ? `btn-active` : null
              }`}
            data-step={4}
            onClick={this.props.handleClick}
          >
            4
                  </button>
        </div>
      </div>

    )

  }

}

export default ButtonsTop 