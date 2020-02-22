import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { dropDownOptions } from './data.js';
//import './style.css';

const animatedComponents = makeAnimated();

export default function Dropdown() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={dropDownOptions}
      />
    );
  }
