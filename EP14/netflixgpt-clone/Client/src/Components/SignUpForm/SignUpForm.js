import React,{ useRef,useState } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../../firebase';
import { formValidator } from '../../utils/FormValidation';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Store/Slice/UserSlice';

const SignUpForm = () => {
  const [isSignInForm,setIsSignInForm] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleFormValidation = async () => {
    const nameValue = isSignInForm ? null : name.current?.value;
    const isValid = formValidator(email.current.value,password.current.value,nameValue,isSignInForm);

    if (isValid.error) {
      alert(isValid.message);
    } else {
      if (isSignInForm) {
        await handleSignIn();
      } else {
        await handleSignUp();
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      const user = userCredential.user;
      updateProfile(user,{
        displayName: name.current.value,
      })
      .then(()=>{
        const {uid,email,displayName} = user.current;
        dispatch(addUser({
          uid,
          email,
          displayName
        }));
      })
      .catch((err)=>{
        alert("An error occurred during sign up. Please try again later.");
      });
      alert('Sign up successful!');
    } catch (error) {
      console.error('Sign Up Error:',error.message);
      alert('An error occurred during sign up. Please try again later.');
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      alert('Sign In successful!');
    } catch (error) {
      console.error('Sign In Error:',error.message);
      alert('An error occurred during sign in. Please try again later.');
    }
  };

  return (
    <div className="relative h-screen text-white flex items-center justify-center">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 bg-black bg-opacity-50 text-white p-8 rounded-md lg:max-w-md sm:max-w-md max-w-md w-11/12 md:w-8/12 lg:w-6/12 xl:w-6/12">
        <h2 className="text-3xl font-bold mb-6">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={(e) => { e.preventDefault() }} className="space-y-4">
          {!isSignInForm && (
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                ref={name}
                className="w-full p-3 bg-gray-800 rounded-md text-white"
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Enter Email Id"
              ref={email}
              className="w-full p-3 bg-gray-800 rounded-md text-white"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              ref={password}
              className="w-full p-3 bg-gray-800 rounded-md text-white"
            />
          </div>
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-bold"
            onClick={handleFormValidation}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-8 text-center">
          {isSignInForm ? (
            <p className="text-sm text-gray-400">
              New to Netflix? <a href="#" className="text-white hover:underline" onClick={() => setIsSignInForm(!isSignInForm)}>Sign Up now.</a>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Already registered? <a href="#" className="text-white hover:underline" onClick={() => setIsSignInForm(!isSignInForm)}>Sign In now.</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;