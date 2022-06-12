import intakeFormModel from "./intakeFormModel";

const {
  formField: { firstName, lastName, email },
} = intakeFormModel;

export default {
  [firstName.name]: "Yo yo",
  [lastName.name]: "",
  [email.name]: "",
};
