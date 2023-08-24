import React, { useState } from "react";

const FormUpdate = ({ index, onUpdate, onOpen, nameJob }) => {
  const [item, setItem] = useState();
  const handleEdit = () => {
    onUpdate(index, item);
    onOpen(true);
  };

  return (
    <div>
      <input placeholder='Update todo ...' defaultValue={nameJob} onChange ={(e) => setItem(e.target.value)}></input>
      <button onClick={() => handleEdit()}>Sửa</button>
    </div>
  );
};

export default FormUpdate;
