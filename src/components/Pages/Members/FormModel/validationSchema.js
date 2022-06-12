import * as Yup from "yup";
import intakeFormModel from "./intakeFormModel";

const {
  formField: { firstName, lastName, email, phoneNumber },
} = intakeFormModel;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object({
  [firstName.name]: Yup.string(),
  [lastName.name]: Yup.string(),
  [email.name]: Yup.string(),
  [phoneNumber.name]: Yup.string()
    .required()
    .matches(phoneRegExp, "Phone number but be valid"),
});
