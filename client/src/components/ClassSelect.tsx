import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { Typography } from '@mui/material';

export default function ClassSelect() {
  return (
    <div>
      {' '}
      <span>
        {' '}
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          {' '}
          <InputLabel htmlFor="classoptions">Class Options</InputLabel>{' '}
          <Select native defaultValue="" id="classoptions" label="Class Options">
            {' '}
            <option aria-label="None" value="" />{' '}
            <optgroup label="Mathematics">
              {' '}
              <option value={1}>Algebra 1</option> <option value={2}>Geometry</option>{' '}
              <option value={3}>Algebra 2</option> <option value={4}>Pre-Calculus</option>{' '}
              <option value={5}>Calculus</option>{' '}
            </optgroup>{' '}
            <optgroup label="Science">
              {' '}
              <option value={6}>Earth Science</option> <option value={7}>Biology</option>{' '}
              <option value={8}>Chemistry</option> <option value={9}>Physics</option>{' '}
              <option value={10}>AP Biology</option>{' '}
            </optgroup>{' '}
            <optgroup label="English">
              {' '}
              <option value={11}>English 9</option> <option value={12}>English 10</option>{' '}
              <option value={13}>English 11</option> <option value={14}>English 12</option>{' '}
            </optgroup>{' '}
            <optgroup label="Social Studies">
              {' '}
              <option value={15}>Modern History</option> <option value={16}>U.S. History</option>{' '}
              <option value={17}>World History</option>{' '}
              <option value={18}>American Government and Politics</option>{' '}
            </optgroup>{' '}
            <optgroup label="French">
              {' '}
              <option value={19}>French I</option> <option value={20}>French II</option>{' '}
              <option value={21}>French III</option> <option value={22}>French IV</option>{' '}
              <option value={23}>AP French</option>{' '}
            </optgroup>{' '}
            <optgroup label="Spanish">
              {' '}
              <option value={24}>Spanish I</option> <option value={25}>Spanish II</option>{' '}
              <option value={26}>Spanish III</option> <option value={27}>Spanish IV</option>{' '}
              <option value={28}>AP Spanish</option>{' '}
            </optgroup>{' '}
          </Select>{' '}
        </FormControl>{' '}
      </span>{' '}
    </div>
  );
}
