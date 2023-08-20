import React from 'react';
import Icon from '../../icons/icons';
import { Formik, Form, Field } from 'formik';

function Signup({ isRegister, setIsRegister }) {

  // Form stepper ekranının kapatılmasını sağlar
  const handleCloseClick = (isRegister) => {
    return setIsRegister(!isRegister)
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      {/* Yardımcı kaplama katmanı */}
      <div className='bg-black h-screen opacity-40 absolute inset-0'></div>

      {/* Form Stepper */}
      <div className='bg-white rounded-xl relative py-2 pl-2 flex'>
        <div>
          <button className='hover:bg-gray-extraLight rounded-full p-1 mr-5'
          onClick={() => handleCloseClick(isRegister)}>
            <Icon name='closeIcon' size={20}/>
          </button>
        </div>
        <Formik 
          initialValues={{
            step: 1,
            lastStep: 5,

            // Step 1
            name: '',
            phoneNumber: '',
            eMail: '',
            birtDay: ''
          }}>
        
        {({values, setFieldValue, isValid, dirty }) => {
          return (
            <Form className='pr-14'>
              
              <div>
                <header className='font-semibold text-lg mb-4'>Adım {values.step}/5</header>
              </div>

              {values.step === 1 && (
                <div>
                  <div className='mb-4'>
                    <span className='font-semibold text-2xl'>Hesabını Oluştur</span>
                  </div>
                  <div className='mb-7'>
                    <Field name="name" className="border w-80 h-10 px-2 focus:outline-none focus:ring-2 rounded-sm" placeholder="İsim"/>
                  </div>
                  <div>
                    <Field name="eMail" className="border w-80 h-10 px-2 focus:outline-none focus:ring-2 rounded-sm" placeholder="E-posta"/>
                  </div>
                </div>
              )}

            </Form>
          )
        }} 
        </Formik>
      </div>

    </div>
  );
}

export default Signup;
