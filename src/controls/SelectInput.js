import React, { useState } from 'react';

const TextInput = ({name, value, options, setValue }) => {

  const [editingValue, setEditingValue] = useState(value);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value)
    }
  }

  return (
    <select name={name} value={editingValue} onChange={onChange} onKeyDown={onKeyDown} onBlur={onBlur}>
      {options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
    </select>
  );
}

export default TextInput;
