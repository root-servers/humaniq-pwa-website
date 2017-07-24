import React , { Component } from 'react';
import * as T from "prop-types";
import './Log.scss';
import A_Container from 'A_Container';
import {cssClassName} from 'utils';
const cn = cssClassName('O_TransactionLog');
import {dateString} from 'utils/propsValidationHelpers'
import moment from 'moment';

class O_TransactionLog extends Component {

  render() {
    const {txHash, block, from, to, time, usdAmount, hmqAmount} = this.props
    return (
      <div>
        <A_Container type='wide'>
          <table className={cn('asset-stats')}>
            <tbody>
            <tr className={cn('asset-stats__tr')}>
              <td className={cn('asset-stats__td')}>
                <span className={cn('asset-stats__hash')}>TxHash:</span>
                <span className={cn('asset-stats__block')}>Block:</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <a href="javascript:void(0);" className={cn('asset-stats__hash-link')}>{txHash}</a>
                <a href="javascript:void(0);" className={cn('asset-stats__block-link')}>{block}</a>
              </td>
              <td className={cn('asset-stats__td')}>
                <span className={cn('asset-stats__from')}>From:</span>
                <span className={cn('asset-stats__to')}>To:</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <a href="javascript:void(0);" className={cn('asset-stats__from-link')}>{from}</a>
                <a href="javascript:void(0);" className={cn('asset-stats__to-link')}>{to}</a>
              </td>
              <td className={cn('asset-stats__td')}>
                <span className={cn('asset-stats__price-hmq')}>{hmqAmount} HMQ</span>
                <span className={cn('asset-stats__price-usd')}>${usdAmount} USD</span>
              </td>
              <td className={cn('asset-stats__td')}>
                <small className={cn('asset-stats__time asset-stats__time--success')}>
                  <i className={cn('asset-stats__icon o-asset-stats__icon--success')}></i>
                  {moment(time).fromNow()}
                </small>
              </td>
            </tr>
            </tbody>
          </table>
        </A_Container>
      </div>
    )
  }
}


O_TransactionLog.propTypes = {
  txHash: T.string.isRequired,
  block: T.number.isRequired,
  from: T.string.isRequired,
  to: T.string.isRequired,
  time: dateString.isRequired,
  usdAmount: T.number.isRequired,
  hmqAmount: T.number.isRequired,
  status: T.oneOf([
    'pending',
    'success',
    'failure',
  ]).isRequired,
};

export default O_TransactionLog