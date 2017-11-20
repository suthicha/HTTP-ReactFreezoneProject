import React from 'react';

class InputDateEdit extends React.Component {
    constructor(props){
      super(props);
      this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = (event) => {
      const fieldName   = event.target.name;
      const fieldValue  = event.target.value;
      this.props.onChange(fieldName, fieldValue);
    }

    render(){
      return (
        <input 
          type      = "date" 
          name      = {this.props.name}
          value     = {this.props.value} 
          className = {this.props.className} 
          onChange  = {this.handleOnChange}
        /> 
      );
    }
}

export default InputDateEdit;