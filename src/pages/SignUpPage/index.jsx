import React from 'react';
import SignUpForm from 'components/SignUpForm';

function SignUpPage() {
  return (
    <section>
    <h1>SIGN UP</h1>
    <SignUpForm registerUser = {() => {}} />
    </section>
  );  
}

export default SignUpPage;