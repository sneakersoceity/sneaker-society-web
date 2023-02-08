import React from 'react';
import Header from './Components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createTheme } from '@mui/material/styles';
import {
  Container,
  Grid,
  Typography
} from "@mui/material";
import Textfield from './Components/FormsUI/Textfield';
import Select from './Components/FormsUI/Select';
import Checkbox from './Components/FormsUI/Checkbox';
import Button from './Components/FormsUI/Button';
import states from './data/states.json';

const theme = createTheme((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  state: '',
  bio: '',
  termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),

  state: Yup.string()
    .required('Required'),
  bio: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

const CompleteProfile = () => {
  const classes = theme();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      Your details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="phone"
                      label="Phone"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Where are you from?
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="state"
                      label="State"
                      options={states}
                    />
                  </Grid>
                
                  <Grid item xs={12}>
                    <Textfield
                      name="bio"
                      label="Bio"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree to the terms and conditions"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default CompleteProfile;
