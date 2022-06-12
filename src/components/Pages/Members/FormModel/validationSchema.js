import * as Yup from "yup";
import intakeFormModel from "./intakeFormModel";

const {
  formField: { firstName, lastName, email },
} = intakeFormModel;

export default Yup.object({
  [firstName.name]: Yup.string(),
  [lastName.name]: Yup.string(),
  [email.name]: Yup.string(),
});
