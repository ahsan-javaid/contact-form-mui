import React, { useState } from 'react';

const TextInput = ({name, value, label, type, setValue }) => {

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
    <input
      name={name}
      type={type}
      aria-label={label}
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
}

export default TextInput;
