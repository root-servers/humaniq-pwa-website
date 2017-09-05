import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Dropdown2')
import onClickOutside from 'react-onclickoutside'
import A_InputText from 'A_InputText'

class M_Dropdown2 extends Component {
  state = {
    isOpened: false,
    value: this.props.value || '',
    inputValue: ''
  }

  handleClickOutside = () => {
    this.setState({isOpened:false, inputValue: this.state.value})
  }


  handleClick = () =>{
    if(!this.state.isOpened)
      this.setState({isOpened: true})
  }

  handleChange = (selected) => {
    this.setState({inputValue: selected, isOpened:false, value: selected})
    this.props.onChange(selected)
  }

  getListOptions(options, isOpened, selected) {
    let renderOptions

    if(options.length){
      renderOptions = options.map(option => {
        return (
          <ol
            className={cn('list-options-item', {selected: selected === option})}
            key={'key_' + option}
            onClick={() => this.handleChange(option)}
          >{option}</ol>
        )
      })
    }else{
      renderOptions = <ol
        className={cn('list-options-item')}
        onClick={() => this.setState({inputValue: ''})}

      >No results</ol>
    }

    return (
      <div className={cn('list-wrapper', {closed: !isOpened})}>
        <ul className={cn('list-options')}>
          {renderOptions}
        </ul>
      </div>
    )
  }


  getOptions(options, filter){
    return(
      options.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
    )
  }

  render() {
    const {options, selected, error} = this.props;
    const {isOpened, inputValue} = this.state;
    const filteredOptions = this.getOptions(options, inputValue)
    const listOptions = this.getListOptions(filteredOptions, isOpened, selected)
    return (
      <span className={cn('root')} onClick={this.handleClick}>
        <div className={cn('select', {isOpened})}>
          <div className={cn('inner')}>
            <A_InputText
              setFocus = {isOpened}
              label="Your country"
              value = {inputValue}
              onFocus = {() => this.setState({inputValue: ''})}
              handleChange={value => this.setState({inputValue: value})}
            />

          </div>

        </div>
        {listOptions}
        <div className={cn('error')}>{error}</div>

      </span>

    )
  }
}

M_Dropdown2.propTypes = {
  options: T.array.isRequired,
  selected: T.string.isRequired,
  error: T.string
};

M_Dropdown2.defaultProps = {
}

export default onClickOutside(M_Dropdown2)



