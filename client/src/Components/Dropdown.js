import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { dropDownOptions } from './data.js';
//import './style.css';

const animatedComponents = makeAnimated();

const customStyle = {
  container: provided => ({
    ...provided,
    width: 300
  })
  /*control: () => ({
    width: 100
  })*/
}

export default function Dropdown() {
  return (
    <Select
      styles={customStyle}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={dropDownOptions}
      />
    );
  }
