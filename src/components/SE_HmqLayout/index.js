import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('SE_HmqLayout');
import O_Fixed from 'O_Fixed'
import NavBar from './NavBar'

class SE_HmqLayout extends Component {

  render() {
    const {children} = this.props;

    return (
      <div className={cn('root')}>
        <O_Fixed quite>
          <div className={cn('nav-menu')}><NavBar /></div>
        </O_Fixed>
        {children}
      </div>
    )
  }
}

SE_HmqLayout.propTypes = {
  children: T.any.isRequired,
};

export default SE_HmqLayout