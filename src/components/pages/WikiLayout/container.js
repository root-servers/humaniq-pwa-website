import {connect} from 'react-redux';
import page from './page'

function mapStateToProps(state) {
  const {wikiSearch:{request: searchRequest}} = state
  return {searchRequest};
}

export default connect(mapStateToProps)(page);
