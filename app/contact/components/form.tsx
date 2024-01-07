import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

type FormValues = {
  field1: string;
  field2: string;
  // Add more fields with their types
  // field3: string;
  // ...
  field10: string;
};

const validationSchema = yup.object().shape({
  field1: yup.string().required('Field 1 is required'),
  field2: yup.string().required('Field 2 is required'),
  // Add more fields with their validation rules
  // Example: field3: yup.string().required('Field 3 is required'),
  // ...
  field10: yup.string().required('Field 10 is required'),
});

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="field1">Field 1:</label>
        <input type="text" id="field1" {...register('field1')} />
        {errors.field1 && <p>{errors.field1.message}</p>}
      </div>
      {/* Add more fields with similar structures */}
      <div>
        <label htmlFor="field2">Field 2:</label>
        <input type="text" id="field2" {...register('field2')} />
        {errors.field2 && <p>{errors.field2.message}</p>}
      </div>
      {/* ... */}
      <div>
        <label htmlFor="field10">Field 10:</label>
        <input type="text" id="field10" {...register('field10')} />
        {errors.field10 && <p>{errors.field10.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
