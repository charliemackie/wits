import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import axios from 'axios';

export default function Form() {

  // user
  var Snack = '';
  var Allergy = '';
  var Noise = '';
  var Light = '';

  // snacks
  const [isSnackNutsChecked, setSnackNutsChecked] = React.useState(false);
  const [isSnackMilkChecked, setSnackMilkChecked] = React.useState(false);
  const [isSnackSeafoodChecked, setSnackSeafoodChecked] = React.useState(false);
  const [isSnackNoneChecked, setSnackNoneChecked] = React.useState(false);
  const [isSnackOtherChecked, setSnackOtherChecked] = React.useState(false);

  if (isSnackNutsChecked) {
    Snack = 'Nuts'
  }
  if (isSnackMilkChecked) {
    Snack = 'Milk'
  }
  if (isSnackSeafoodChecked) {
    Snack = 'Seafood'
  }
  if (isSnackNoneChecked) {
    Snack = 'None'
  }
  if (isSnackOtherChecked) {
    Snack = 'Other'
  }

  // allergies
  const [isAllergicNutsChecked, setAllergicNutsChecked] = React.useState(false);
  const [isAllergicMilkChecked, setAllergicMilkChecked] =
    React.useState(false);
  const [isAllergicSeafoodChecked, setAllergicSeafoodChecked] =
    React.useState(false);
  const [isAllergicNoneChecked, setAllergicNoneChecked] =
    React.useState(false);

  if (isAllergicNutsChecked) {
    Allergy = 'Nuts'
  }
  if (isAllergicMilkChecked) {
    Allergy = 'Milk'
  }
  if (isAllergicSeafoodChecked) {
    Allergy = 'Seafood'
  }
  if (isAllergicNoneChecked) {
    Allergy = 'None'
  }

  // noise
  const [isSilenceChecked, setSilenceChecked] = React.useState(false);
  const [isLivelyChecked, setLivelyChecked] =
    React.useState(false);
  const [isConversationalChecked, setConversationalChecked] =
    React.useState(false);
  
  if (isSilenceChecked) {
    Noise = 'Silence'
  }
  if (isLivelyChecked) {
    Noise = 'Lively'
  }
  if (isConversationalChecked) {
    Noise = 'Conversational'
  }
  
  // lights
  const [isNoLightsChecked, setNoLightsChecked] = React.useState(false);
  const [isNaturalLightsChecked, setNaturalLightsChecked] = React.useState(false);
  const [isReadingLightsChecked, setReadingLightsChecked] =
      React.useState(false);
  const [isWindowOpenChecked, setWindowOpenChecked] = React.useState(false);

  if (isNoLightsChecked) {
    Light = 'Silence'
  }
  if (isNaturalLightsChecked) {
    Light = 'Lively'
  }
  if (isReadingLightsChecked) {
    Light = 'Reading'
  }
  if (isWindowOpenChecked) {
    Light = 'Conversational'
  }

  const [value, setValue] = React.useState(false);

  const handleChange = () => {
      setValue(!value);
    };

  // user ID
  var ID = Math.floor((Math.random() * 10000) + 1);

  // handle form submission
  function handleSubmit() {
    console.log('hey')
    axios.post('http://localhost:3000/user/add', {
      ID: ID,
      Snack: Snack ,
      Allergy: Allergy,
      Noise: Noise,
      Light: Light 
    })
  }
      
  return (
    <form>
      <div className="p-5">
        <Grid
          container
          spacing={5}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <div>
              <FormGroup>
                <FormLabel component="legend">
                  What snacks will you consume on the flight?{" "}
                  <strong>Multiple can be selected.</strong>
                </FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isSnackNutsChecked}
                      onChange={setSnackNutsChecked}
                      name="Nuts"
                    />
                  }
                  label="Nuts"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isSnackMilkChecked}
                      onChange={setSnackMilkChecked}
                      name="Milk"
                    />
                  }
                  label="Milk"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isSnackSeafoodChecked}
                      onChange={setSnackSeafoodChecked}
                      name="Seafood"
                    />
                  }
                  label="Seafood"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isSnackNoneChecked}
                      onChange={setSnackNoneChecked}
                      name="None"
                    />
                  }
                  label="None"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isSnackOtherChecked}
                      onChange={setSnackOtherChecked}
                      name="Other"
                    />
                  }
                  label="Other"
                />
              </FormGroup>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div>
              <FormGroup>
                <FormLabel component="legend">
                  Are you allergic to any of the following major allergies?{" "}
                  <strong>Multiple can be selected.</strong>
                </FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isAllergicNutsChecked}
                      onChange={setAllergicNutsChecked}
                      name="Nuts"
                    />
                  }
                  label="Nuts"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isAllergicMilkChecked}
                      onChange={setAllergicMilkChecked}
                      name="Milk"
                    />
                  }
                  label="Milk"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isAllergicSeafoodChecked}
                      onChange={setAllergicSeafoodChecked}
                      name="Seafood"
                    />
                  }
                  label="Seafood"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isAllergicNoneChecked}
                      onChange={setAllergicNoneChecked}
                      name="None"
                    />
                  }
                  label="None"
                />
              </FormGroup>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div>
              <FormGroup>
                <FormLabel component="legend">
                  What's your noise preference?{" "}
                  <strong>Choose one</strong>
                </FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isSilenceChecked}
                      onChange={setSilenceChecked}
                      name="Silence"
                    />
                  }
                  label="Silence"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isConversationalChecked}
                      onChange={setConversationalChecked}
                      name="Conversational"
                    />
                  }
                  label="Conversational"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isLivelyChecked}
                      onChange={setLivelyChecked}
                      name="Lively"
                    />
                  }
                  label="Lively"
                />
              </FormGroup>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div>
              <FormGroup>
                <FormLabel component="legend">
                  What is your preference on lighting and the people around you
                  using them? <strong>Multiple can be selected.</strong>
                </FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isNoLightsChecked}
                      onChange={setNoLightsChecked}
                      name="No Lighting"
                    />
                  }
                  label="No Lighting"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isNaturalLightsChecked}
                      onChange={setNaturalLightsChecked}
                      name="Natural Lighting"
                    />
                  }
                  label="Natural Lighting"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isReadingLightsChecked}
                      onChange={setReadingLightsChecked}
                      name="Reading Lights"
                    />
                  }
                  label="Reading Lights"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      isChecked={isWindowOpenChecked}
                      onChange={setWindowOpenChecked}
                      name="Window Open"
                    />
                  }
                  label="Window Open"
                />
              </FormGroup>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <FormGroup>
                <FormLabel component="legend">
                  Are you traveling with other passengers?{" "}
                  <strong>Select one.</strong>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="noise-level"
                  checked={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormGroup>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <label>
                <b>
                  Please input the emails of passengers you will travel with.
                </b>
              </label>
            </div>
            <div className="pt-3">
              <TextField
                id="outlined-basic"
                label="Enter email here"
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <Link to={"/seating/:id"}>
                <input type="submit" onClick={handleSubmit}/>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
