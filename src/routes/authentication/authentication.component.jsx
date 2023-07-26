import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContainer } from './authentication.styles';
import { selectCurrentUser } from '../../store/user/user.selector';

const Authentication = () => {
 
const currentUser = useSelector(selectCurrentUser)
const navigate = useNavigate();

useEffect(()=>{
  if(currentUser){
    navigate('/shop')
  }else{
    console.log('this didnt work')
  }
},[currentUser, navigate])
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
