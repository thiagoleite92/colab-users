import React from "react";
import Select from "react-select";

export default function SelectInput({
  label,
  options,
  onChange,
  placeHolder,
  menuPos = "top",
}) {
  return (
    <label className="flex justify-center items-center gap-2  text-purple-600 px-2">
      <strong>{label}: </strong>
      <Select
        options={options}
        menuPlacement={menuPos}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </label>
  );
}
