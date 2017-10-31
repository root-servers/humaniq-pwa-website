import React, {Component} from 'react';
import OpenSourceContainer from 'containers/OpenSourceContainer'
import {setTheme} from 'store/entities/navigation/actions'
import initialLoad from 'utils/initialLoad'

class OpenSourceRoute extends Component {

  static prepareData({dispatch}) {
    if(initialLoad()) return;
    dispatch(setTheme('dark'))
  }

  render() {
    return (
      <OpenSourceContainer />
    )
  }
}

export default OpenSourceRoute;