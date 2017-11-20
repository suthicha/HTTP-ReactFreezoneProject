import React from 'react';

class InputLongEdit extends React.Component {
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
        <textarea 
          name      = {this.props.name}
          value     = {this.props.value} 
          className = {this.props.className} 
          onChange  = {this.handleOnChange}
        /> 
      );
    }
}

export default InputLongEdit;