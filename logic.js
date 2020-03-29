import { createLogic } from 'redux-logic';
import {
  FETCH_POLLS,
  CANCEL_FETCH_POLLS,
  FETCH_POLLS_SUCCESS,
  FETCH_POLLS_FAILED
} from './constants';

export const fetchPollsLogic0 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const fetchPollsLogic1 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const fetchPollsLogic2 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const fetchPollsLogic3 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const fetchPollsLogic4 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const fetchPollsLogic5 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const fetchPollsLogic6 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});

export const fetchPollsLogic7 = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_POLLS, // only apply this logic to this type
  cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_POLLS_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_POLLS_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});