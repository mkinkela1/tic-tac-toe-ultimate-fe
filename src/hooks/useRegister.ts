import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "src/schemas/registerSchema";

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

export const useRegister = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      reset(defaultValues);
    } catch (error) {}
  });

  return { onSubmit, control, errors };
};
