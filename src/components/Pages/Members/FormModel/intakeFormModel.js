export default {
  formId: "intakeForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "First Name",
      requiredErrMsg: "First name is required.",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      requiredErrMsg: "Last name is required.",
    },
    email: {
      name: "email",
      label: "Email",
      requiredErrMsg: "email is required.",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "Phone Number",
      requiredErrMsg: "Phone number is required.",
      invalidErrMsg: "Must be a valid Phone Number",
    },
  },
};