import { connect } from 'react-redux';
import { AppState } from '../../states';
import { authenticationAction } from '../../actions';
import MainLayout from './MainLayout';

const mapStateToProps = (state: AppState) => ({
  authenticated: state.authentication.authenticated,
  userName: state.authentication.userName,
  inProgress: state.authentication.inProgress
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authenticationAction.logout())
});

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLayout);

export default MainLayoutContainer;