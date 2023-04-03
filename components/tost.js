
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 // <-------------Tosts Start ------------->
    // <-------------Tost Login (*Success*) Start ------------->
    
    const LoginSuccess = () => {
        toast.success('Login Success');
      }
      
      
      const WrongPassword = () => {
        toast.warn('Invalid login credentials');
      }
      
      
      const EmailNotExist = () => {
        toast.info('Email not exist');
      }
      
      
      const ServerError = () => {
        toast.error('Server Error ! Please try again later');
      }
    // <-------------Tost Sing Up (*Success*) Start ------------->
    
    const SingUPSuccess = () => {
        toast.success('Accoount Created Successfully');
      }
      
    
      const NotSamePassword = () => {
        toast.warn('Password not match');
      }
     
      const EmailAlreadyExist = () => {
        toast.info('Email or Name already exist');
      }

      const NotField = () => {
        toast.info('Please fill all fields');
      }
      
      
  
    // <-------------Tosts End ------------->
// exporting all functions
    export {LoginSuccess,WrongPassword,EmailNotExist,ServerError,SingUPSuccess,NotSamePassword,EmailAlreadyExist,NotField}