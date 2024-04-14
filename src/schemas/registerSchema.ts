import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short")
    .test({
      test: function (val: string = "") {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;

        if (!regex.test(val)) {
          return this.createError({
            message:
              "Password needs to contain at least 8 characters, 1 capital letter, 1 small letter and 1 number",
          });
        }
        return true;
      },
    }),
  confirmPassword: yup.string().test({
    test: function (val: string = "") {
      if (!val) {
        return this.createError({
          message: "Confirm password is required",
        });
      }
      if (val !== this.parent.password)
        return this.createError({
          message: "Passwords must match",
        });
      return true;
    },
  }),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});
