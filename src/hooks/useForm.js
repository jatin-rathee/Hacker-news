import React from "react";
import { toast } from "../helpers/toast";

const useForm = (initialState, validate, action) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErros = Object.keys(errors).length === 0;
      if (noErros) {
        action();
        setValues(initialState);
        setSubmitting(false);
      } else {
        toast(Object.values(errors).join(" "));
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line
  }, [errors]);

  const handleChange = (event) => {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const validateErrors = validate(values);
    setErrors(validateErrors);
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    values,
    setValues,
    isSubmitting,
  };
};

export default useForm;
