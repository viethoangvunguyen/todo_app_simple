
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'
const UPDATE_JOB = 'update_job'
const SEARCH_JOB = 'search_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

const updateJob = (index, job) => {
    return {
        type: UPDATE_JOB,
        payload : {
            index: index,
            value: job
        }
    }
}

const searchJob = (payload) => {
    return{
        type: SEARCH_JOB,
        payload
    }
}

export {setJob, addJob, deleteJob, updateJob, searchJob, SET_JOB, ADD_JOB, DELETE_JOB, UPDATE_JOB, SEARCH_JOB}