import intakeFormModel from "./intakeFormModel";

const {
  formField: {
    firstName,
    lastName,
    email,
    phoneNumber,
    shoeBrand,
    shoeSize,
    shoeName,
    description,
    askingFor,
    files,
  },
} = intakeFormModel;

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [phoneNumber.name]: "",
  [askingFor.name]: "test",
  [shoeBrand.name]: "tester",
  [shoeName.name]: "fsdfa",
  [shoeSize.name]: "12",
  [description.name]: "safaw",
  [files.name]: null,
};
