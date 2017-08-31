import { connect } from 'react-redux';
import { getBidArray } from '../reducers/bids';
import SearchingScreen from '../components/SearchingScreen.jsx';
import { resetOrderDetails } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  stopSearching: () => dispatch(resetOrderDetails()),
});

export default connect(
  (state) => ({
    vehicles: state.vehicles,
    bids: getBidArray(state.bids),
  }),
  mapDispatchToProps
)(SearchingScreen);