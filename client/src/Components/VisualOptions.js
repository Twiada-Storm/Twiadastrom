import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedMap:false,
    checkedPie: false,
    checkedTweetCount: false,
    checkedSentiment: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedMap}
            onChange={handleChange}
            name="checkedMap"
            color="secondary"
            />
        }
        label="Map"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedPie}
            onChange={handleChange}
            name="checkedPie"
            color="secondary"
          />
        }
        label="Pie Chart"
      />
      <FormControlLabel
        control={
            <Checkbox
            checked={state.checkedTweetCount}
            onChange={handleChange}
            name="checkedTweetCount"
            color="secondary"
        />
    }
    label="Tweet Count"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={state.checkedSentiment}
          onChange={handleChange}
          name="checkedSentiment"
          color="secondary"
        />
      }
      label="Sentiment"
    />
    </FormGroup>
  );
}
