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
  [askingFor.name]: "none",
  [shoeBrand.name]: "Nike",
  [shoeName.name]: "J c1",
  [shoeSize.name]: "8",
  [description.name]: "idk",
  [files.name]: null,
};
