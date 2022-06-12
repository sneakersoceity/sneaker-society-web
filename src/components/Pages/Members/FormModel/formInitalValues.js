import intakeFormModel from "./intakeFormModel";

const {
  formField: { firstName, lastName, email, phoneNumber },
} = intakeFormModel;

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [phoneNumber.name]: "",
};
