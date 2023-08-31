import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  // const [dailyStreak, setDailyStreak] = useState(user.dailyStreak || '1 day! ')

  // async function handleSubmit(evt) {
  //   // Prevent form from being submitted to the server
  //   evt.preventDefault();
  //   try {
  //     // The promise returned by the signUp service method 
  //     // will resolve to the user object included in the
  //     // payload of the JSON Web Token (JWT)
  //     const user = await usersService.login(credentials);
  //     setUser(user);
  //   } catch {
  //     setError('Log In Failed - Try Again');
  //   }
  // }



  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    
    try {
      // Log the user in and get the updated user data
      const user = await usersService.login(credentials);
      
      // Check if the last login was on the same day
      const today = new Date().toISOString().slice(0, 10);
      const lastLoginDate = user.lastLogin ? user.lastLogin.slice(0, 10) : null;
      if (lastLoginDate !== today) {
        // Update the user's streak if it's a new day
        const streakResponse = await fetch(`/api/user/${user._id}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (streakResponse.ok) {
          const updatedUser = await streakResponse.json();
          setUser(updatedUser);
        } else {
          console.error('Error updating streak:', streakResponse.status);
        }
      }
      
           setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="login-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit" className='submit-btn'>LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
} 


// import React, { useState } from 'react';
// import { Formik, Field } from "formik";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Input,
//   VStack
// } from "@chakra-ui/react";
// import * as usersService from '../../utilities/users-service';

// export default function LoginForm({ setUser }) {
//   const [error, setError] = useState('');
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });

//   function handleChange(evt) {
//     setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//     setError('');
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     try {
//       const user = await usersService.login(credentials);
//       setUser(user);
//     } catch {
//       setError('Log In Failed - Try Again');
//     }
//   }

//   return (
//     <Flex bg="gray.100" align="center" justify="center" h="100vh">
//       <Box bg="white" p={6} rounded="md" w={64}>
//         <Formik
//           initialValues={{
//             email: "",
//             password: "",
//             rememberMe: false
//           }}
//           onSubmit={handleSubmit}
//         >
//           {({ handleSubmit, errors, touched }) => (
//             <form onSubmit={handleSubmit}>
//               <VStack spacing={4} align="flex-start">
//                 <FormControl>
//                   <FormLabel htmlFor="email">Email Address</FormLabel>
//                   <Field
//                     as={Input}
//                     id="email"
//                     name="email"
//                     type="email"
//                     variant="filled"
//                     value={credentials.email}
//                     onChange={handleChange}
//                   />
//                 </FormControl>
//                 <FormControl isInvalid={!!errors.password && touched.password}>
//                   <FormLabel htmlFor="password">Password</FormLabel>
//                   <Field
//                     as={Input}
//                     id="password"
//                     name="password"
//                     type="password"
//                     variant="filled"
//                     value={credentials.password}
//                     onChange={handleChange}
//                     validate={(value) => {
//                       let error;

//                       if (value.length < 6) {
//                         error = "Password must contain at least 6 characters";
//                       }

//                       return error;
//                     }}
//                   />
//                   <FormErrorMessage>{errors.password}</FormErrorMessage>
//                 </FormControl>
//                 <Field
//                   as={Checkbox}
//                   id="rememberMe"
//                   name="rememberMe"
//                   colorScheme="purple"
//                 >
//                   Remember me?
//                 </Field>
//                 <Button type="submit" colorScheme="purple" width="full">
//                   Login
//                 </Button>
//               </VStack>
//             </form>
//           )}
//         </Formik>
//       </Box>
//     </Flex>
//   );
// }