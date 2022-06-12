import * as Yup from "yup";
import intakeFormModel from "./intakeFormModel";

const {
  formField: { firstName, lastName, email, phoneNumber },
} = intakeFormModel;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object({
  [firstName.name]: Yup.string().required(`${firstName.requiredErrMsg}`),
  [lastName.name]: Yup.string().required(`${lastName.requiredErrMsg}`),
  [email.name]: Yup.string().required(`${email.requiredErrMsg}`),
  [phoneNumber.name]: Yup.string()
    .required(`${phoneNumber.requiredErrMsg}`)
    .matches(phoneRegExp, `${phoneNumber.invalidErrMsg}`),
});