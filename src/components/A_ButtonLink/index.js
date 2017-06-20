import React, { PropTypes } from 'react';
import * as T from "prop-types";
import {Link} from 'react-router'
import catnip from 'catnip';
import styles from './styles.scss';
const cn = catnip('a-button-link')

// size - button size (xs, s, m, l, xl)
// color - button color (primary, secondary, disabled, transparent_black, transparent_white)

const A_ButtonLink = ({children, to, size, color}) =>
  <Link className={cn({size, color})} to={to}>
    {children}
  </Link>

A_ButtonLink.propTypes = {
  children: T.any.isRequired
};

export default A_ButtonLink