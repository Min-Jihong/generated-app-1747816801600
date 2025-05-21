import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username', { required: true })} placeholder='Username'/>
      {errors.username && <span>This field is required</span>}
      <input {...register('password', { required: true })} type='password' placeholder='Password'/>
      {errors.password && <span>This field is required</span>}
      <input type='submit' />
    </form>
  );
}