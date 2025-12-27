// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const LoginForm = () => {
//   return (
//     <View>
//       <StyledWrapper>
//       <form className="form">
//         <p id="heading">Login</p>
//         <div className="field">
//           <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//             <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
//           </svg>
//           <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
//         </div>
//         <div className="field">
//           <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
//             <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
//           </svg>
//           <input placeholder="Password" className="input-field" type="password" />
//         </div>
//         <div className="btn">
//           <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
//           <button className="button2">Sign Up</button>
//         </div>
//         <button className="button3">Forgot Password</button>
//       </form>
//     </StyledWrapper>
//     </View>
//   )
// }

// export default LoginForm

// const styles = StyleSheet.create({
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     paddingLeft: "2em",
//     paddingRight: "2em",
//     paddingBottom: "0.4em",
//     backgroundColor: "#171717",
//     borderRadius: "25px",
//   },

  
// })


import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";

const Form = () => {
  return (
    <Wrapper>
      <FormBox>
        <Heading>Login</Heading>

        {/* Username */}
        <Field>
          <Icon viewBox="0 0 16 16">
            <Path
              fill="white"
              d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708..."
            />
          </Icon>
          <Input placeholder="Username" placeholderTextColor="#aaa" />
        </Field>

        {/* Password */}
        <Field>
          <Icon viewBox="0 0 16 16">
            <Path
              fill="white"
              d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3..."
            />
          </Icon>
          <Input
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
        </Field>

        {/* Buttons */}
        <ButtonRow>
          <Button>
            <ButtonText>Login</ButtonText>
          </Button>

          <Button>
            <ButtonText>Sign Up</ButtonText>
          </Button>
        </ButtonRow>

        <ForgotButton>
          <ButtonText>Forgot Password</ButtonText>
        </ForgotButton>
      </FormBox>
    </Wrapper>
  );
};

export default Form;

/* ================= STYLES ================= */

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const FormBox = styled.View`
  width: 90%;
  background-color: #171717;
  border-radius: 25px;
  padding: 24px;
`;

const Heading = styled.Text`
  text-align: center;
  margin-bottom: 24px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Field = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #171717;
  border-radius: 25px;
  padding: 12px;
  margin-bottom: 12px;
  shadow-color: #000;
  shadow-offset: 2px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
`;

const Icon = styled(Svg)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Input = styled(TextInput)`
  flex: 1;
  color: #d3d3d3;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;

const Button = styled(Pressable)`
  background-color: #252525;
  padding: 10px 20px;
  border-radius: 6px;
  margin-horizontal: 6px;
`;

const ForgotButton = styled(Pressable)`
  background-color: #252525;
  padding: 10px;
  border-radius: 6px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;
