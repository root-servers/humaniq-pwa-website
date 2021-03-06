import {numberFormat} from 'utils'
import moment from 'moment'

export default (arr) => {
  return arr.map(({address, walletRank, hmqPercentage, totalTransactions, balance}) =>({
    address: address,
    rank: walletRank,
    pecentage: (+ hmqPercentage).toFixed(2),
    txns: totalTransactions,
    usdAmount: numberFormat(+ balance.usd, 2),
    hmqAmount: numberFormat(+ balance.hmq, 2),
    time: moment().format()
  }))
}