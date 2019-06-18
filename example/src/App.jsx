import React from 'react';
import ButtonCall from './components/ButtonCall';
import { ACTIONS, callApiKOAction, callApiOKAction } from './actions/example';

const App = () => (
  <React.Fragment>
    <h1>Redux-thunk-addon Example!</h1>
    <ButtonCall
      buttonLabel="CALL OK API"
      callApiName={ACTIONS.EXAMPLE_API_OK}
      callApiAction={callApiOKAction}
    />
    <br />
    <ButtonCall
      buttonLabel="CALL KO API"
      callApiName={ACTIONS.EXAMPLE_API_KO}
      callApiAction={callApiKOAction}
    />
  </React.Fragment>
);

export default App;
