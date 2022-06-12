import intakeFormModel from "./intakeFormModel";

const {
  formField: { firstName, lastName, email },
} = intakeFormModel;

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
};
