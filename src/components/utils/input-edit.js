import React from 'react';

class InputEdit extends React.Component {
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
          type      = {this.props.type} 
          name      = {this.props.name}
          value     = {this.props.value} 
          className = {this.props.className} 
          onChange  = {this.handleOnChange}
        /> 
      );
    }
}

export default InputEdit;