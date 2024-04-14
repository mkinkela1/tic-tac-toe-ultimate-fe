import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "src/schemas/loginSchema";

export const useLogin = () => {
  const {
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log(getValues());
    reset();
  };

  return { control, errors, onSubmit };
};
