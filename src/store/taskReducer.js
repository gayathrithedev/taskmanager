import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  FETCH_TASK_LIST_FAILURE,
  FETCH_TASK_LIST_REQUEST,
  FETCH_TASK_LIST_SUCCESS,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from './taskActionTypes';

const initialState = {
  taskList: [],

  fetchTaskListLoading: false,
  fetchTaskListResult: null,
  fetchTaskListError: null,

  createTaskLoading: false,
  createTaskResult: null,
  createTaskError: null,

  updateTaskLoading: false,
  updateTaskResult: null,
  updateTaskError: null,

  deleteTaskLoading: false,
  deleteTaskResult: null,
  deleteTaskError: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK_LIST_REQUEST:
      return {
        ...state,
        fetchTaskListLoading: true,
        fetchTaskListResult: null,
        fetchTaskListError: null,
      };
    case FETCH_TASK_LIST_SUCCESS:
      return {
        ...state,
        fetchTaskListLoading: false,
        fetchTaskListResult: action?.payload,
        fetchTaskListError: null,
      };
    case FETCH_TASK_LIST_FAILURE:
      return {
        ...state,
        fetchTaskListLoading: false,
        fetchTaskListResult: null,
        fetchTaskListError: action?.payload,
      };
    case CREATE_TASK_REQUEST:
      return {
        ...state,
        createTaskLoading: true,
        createTaskResult: null,
        createTaskError: null,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        createTaskLoading: false,
        createTaskResult: action?.payload,
        createTaskError: null,
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        createTaskLoading: false,
        createTaskResult: null,
        createTaskError: action?.payload,
      };
    case UPDATE_TASK_REQUEST:
      return {
        ...state,
        updateTaskLoading: true,
        updateTaskResult: null,
        updateTaskError: null,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        updateTaskLoading: false,
        updateTaskResult: action?.payload,
        updateTaskError: null,
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        updateTaskLoading: false,
        updateTaskResult: null,
        updateTaskError: action?.payload,
      };
    case DELETE_TASK_REQUEST:
      return {
        ...state,
        deleteTaskLoading: true,
        deleteTaskResult: null,
        deleteTaskError: null,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        deleteTaskLoading: false,
        deleteTaskResult: action?.payload,
        deleteTaskError: null,
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        deleteTaskLoading: false,
        deleteTaskResult: null,
        deleteTaskError: action?.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
