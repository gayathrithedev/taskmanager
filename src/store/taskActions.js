import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
} from './taskActionTypes';

const createTaskRequest = () => ({
  type: CREATE_TASK_REQUEST,
});

const createTaskSuccess = data => ({
  type: CREATE_TASK_SUCCESS,
  payload: data,
});

const createTaskFailure = data => ({
  type: CREATE_TASK_FAILURE,
  payload: data,
});

const createTaskAction = () => {
  return async dispatch => {
    dispatch(createTaskRequest());
    try {
      dispatch(createTaskSuccess({result: 'success'}));
    } catch (error) {
      dispatch(createTaskFailure({error: 'Failed'}));
    }
  };
};
