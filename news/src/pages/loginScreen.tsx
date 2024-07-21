import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLogin = (values: { username: string, password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        if ((values.username !== 'admin' || values.password !== 'password')) {
            alert('Login Failed')
        }
        if (values.username === 'admin' && values.password === 'password') {
            localStorage.setItem('token', 'authenticated')
            alert('Login Success')
            navigate('/dashboard')
        }
        setSubmitting(false);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex justify-center items-center max-w-96 flex-col h-full bg-blue'>
                <h1 className="text-3xl">Username: admin , Password: password</h1>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex justify-center items-center max-w-96 flex-col h-full'>
                            <Field type='text' name='username' placeholder='username' className='border border-slate-600 rounded-md px-4 py-2 mb-2 w-full' />
                            <ErrorMessage name='username' component='div' className='text-red-600' />
                            <Field type='password' name='password' placeholder='password' className='border border-slate-600 rounded-md px-4 py-2 mb-2 w-full' />
                            <ErrorMessage name='password' component='div' className='text-red-600' />
                            <button type='submit' disabled={isSubmitting} className='bg-blue-700 font-semibold px-4 py-2 text-white rounded-md w-full'>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default LoginScreen;
