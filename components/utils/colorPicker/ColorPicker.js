import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const popover = {
  position: 'absolute',
  zIndex: '2',
  bottom: '50px',
};
const cover = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
};

const ColorPicker = ({ color, handleColorChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleColorPickerClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };
  const handleColorPickerClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <div
        className="w-24 h-10 rounded-md"
        style={{ backgroundColor: color }}
        onClick={handleColorPickerClick}
      />
      {displayColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleColorPickerClose} />
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      ) : null}
      <span className="inline-flex ml-4 rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50"
          onClick={handleColorPickerClick}
        >
          Pick a new color
        </button>
      </span>
    </>
  );
};

export default ColorPicker;
