import { useReducer, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import FormUpdate from "./components/FormUpdate";
import { addJob, setJob, deleteJob, updateJob, searchJob } from "./reducer/action";
import { reducer } from "./reducer/reducer";
import { initState } from "./db";

function App() {

  const [isopen, setIsopen] = useState(false);
  const [index, setIndex] = useState(0)
  const [state, dispatch] = useReducer(reducer, initState);
  const [key, setKey] = useState('');

  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''))
  }

  const handleDelete = (id) => {
    dispatch(deleteJob(id))
  }

  const handleUpdate = (index, item) => {
    dispatch(updateJob(index, item))
  }

  const handleOpen = (openTab) => {
    setIsopen(!openTab);
    console.log(openTab);
  }

  const handleSearch = (e) => {
    setKey(e.target.value);
    dispatch(searchJob(key))
  }

  return (
    <div style={{ padding: '0 20px' }}>
      <h3>Todo</h3>
      <input placeholder='Enter todo ...' value={job} onChange={e => dispatch(setJob(e.target.value))}>
      </input>
      <button onClick={handleSubmit}>Add</button>
      <input placeholder="Search" type="text" value={key} onChange={handleSearch}></input>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} <FaTrashCan onClick={() => handleDelete(index)} /><AiOutlineEdit key={index} onClick={() => { setIndex(index); setIsopen(!isopen) }}></AiOutlineEdit></li>
        ))}
      </ul>
      {isopen && <FormUpdate nameJob={jobs[index]} index={index} onUpdate={handleUpdate} onOpen={handleOpen}></FormUpdate>}
      {!isopen && <></>}
    </div>
  );
}

export default App;
