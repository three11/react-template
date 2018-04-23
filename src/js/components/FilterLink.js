/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import Link from './Link';
import { setVisibilityFilter } from '_actions';

/**
 * Map component's state to its props
 *
 * @param  {Array} state
 * @param  {Object} ownProps
 *
 * @return {Object}
 */
const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});

/**
 * Map component's dispatch method to its props
 *
 * @param  {Function} dispatch
 * @param  {Object}   ownProps
 *
 * @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
