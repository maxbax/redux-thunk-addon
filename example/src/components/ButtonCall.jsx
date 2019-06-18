import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AsyncActionStatus } from 'redux-thunk-addon';

class ButtonCall extends React.Component {
  onClick = () => {
    const { callApi } = this.props;
    callApi();
  }

  render = () => {
    const { callApiStatus, buttonLabel } = this.props;
    const fetching = callApiStatus.status === AsyncActionStatus.STARTED;
    return (
      <React.Fragment>
        <hr />
        <button
          type="button"
          onClick={this.onClick}
          disabled={fetching}
        >
          {fetching ? 'Wait please...' : buttonLabel}
        </button>
        <br />
        <br />
        <table border="1">
          <tbody>
            <tr>
              <th>Status</th>
              <th>Result</th>
            </tr>
            <tr>
              <td>{callApiStatus.status}</td>
              <td>{callApiStatus.payload && JSON.stringify(callApiStatus.payload) }</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

ButtonCall.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  callApi: PropTypes.func.isRequired,
  callApiStatus: PropTypes.shape({}).isRequired,
  callApiName: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  callApiAction: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};

const mapStateToProps = (state, { callApiName }) => ({
  callApiStatus: state.api[callApiName],
});

const mapDispatchToProps = (dispatch, { callApiAction }) => ({
  callApi: args => dispatch(callApiAction(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCall);
