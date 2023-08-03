import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router'

const oauthLink = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-e8361356954038c2c0fb328fdd1292cf89265460d0b392080df40c5cd3d25604&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fbackendlogin&response_type=code";

const Container = styled.div`
  background: rgb(34, 193, 195);
  background: linear-gradient(
    135deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  font-family: "work sans";
  font-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  max-width: 800px;  
  max-height: 170px;
  width: 40%;
  height: 60%;
  background-color: #ffffff;
  border-radius: 25px;
  padding: 2rem;
`;

const HeaderTitle = styled.h2`
  text-align: center;
  font-family: "open sans", sans-serif;
  margin: 0;
  font-size: 2rem;
  padding-bottom: 2rem;
`;

const Content = styled.h3`  
  text-align: center;
  font-family: "open sans", sans-serif;
`;

const Button = styled.button`
  border-radius: 25px;
  width: 100%;
  height: 40px;
  font-size: 1.3rem;  
  color: white;
  font-weight: 700;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  border: 0px;
  cursor: pointer;
  transition: opacity 0.25s ease-out;

  &:hover {
    opacity: 0.8;
  }
`;

export default function LibraryIconPage() {

  const router = useRouter();

    const onClickLogin = () => {      
        router.push(oauthLink);
    }


    

    

    // 백엔드 리다이렉션 -> OTP
    // POST OTP 인증번호화함께 로그인요청
    // 성공시 Home Page로 이동    


  return (

    <Container>

      <LoginForm>
        <HeaderTitle> Welcome to 42 Transcendence </HeaderTitle> 
        <Content> The answer to life, the universe and everything </Content>     
        <Button onClick={onClickLogin}>42 Sign in</Button>       
      </LoginForm>



    </Container>


  );
}


// import React from "react";
// import styled from "styled-components";
// import { LAYER } from "stylis";

// const Container = styled.div`
//   background: rgb(34, 193, 195);
//   background: linear-gradient(
//     135deg,
//     rgba(34, 193, 195, 1) 0%,
//     rgba(253, 187, 45, 1) 100%
//   );
//   font-family: "work sans";
//   font-size: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const LoginForm = styled.div`
//   max-width: 500px;
//   min-width: 300px;
//   max-height: 700px;
//   width: 30%;
//   height: 60%;
//   background-color: #ffffff;
//   border-radius: 25px;
//   padding: 2rem;
// `;

// const HeaderTitle = styled.h2`
//   text-align: center;
//   font-family: "open sans", sans-serif;
//   margin: 0;
//   font-size: 2rem;
//   padding-bottom: 2rem;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding-top: 1rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   box-sizing: border-box;
//   border: none;
//   font-size: 1.3rem;
//   padding-left: 1.5rem;
//   padding-bottom: 1rem;
//   box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
//   transition: box-shadow 0.2s ease-in;

//   &:focus {
//     box-shadow: inset 0px -3px 0px 0px rgba(34, 193, 195, 0.7);
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   border-radius: 25px;
//   width: 100%;
//   height: 40px;
//   font-size: 1.3rem;  
//   color: white;
//   font-weight: 700;
//   background: rgb(34, 193, 195);
//   background: linear-gradient(
//     90deg,
//     rgba(34, 193, 195, 1) 0%,
//     rgba(253, 187, 45, 1) 100%
//   );
//   border: 0px;
//   cursor: pointer;
//   transition: opacity 0.25s ease-out;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const AlternativeLogin = styled.div`
//   text-align: center;

//   padding-top: 2rem;
//   margin-top: 1.5rem;
// `;

// const IconGroup = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 2rem 0;
// `;

// const IconLink = styled.a`
//   margin: 0 0.6rem;
//   width: 3rem;
//   height: 3rem;
//   background-repeat: no-repeat;
//   display: inline-block;
// `;

// export default function LibraryIconPage() {

//     const onClickLogin = () => {
//         alert("hello world!");
//     }


//   return (
//     <Container>
//       <LoginForm>
//         <HeaderTitle>Login</HeaderTitle>

//         <Row>
//           <label>Username</label>
//           <Input type="text" placeholder="Enter your username" />
//         </Row>

//         <Row>
//           <label>Password</label>
//           <Input type="password" placeholder="Enter your password" />
//         </Row>
        
//         <Row>
//           <Button onClick={onClickLogin}>Log in</Button>
//         </Row>
//         <AlternativeLogin>
//           <label>Or sign in with:</label>
//           <IconGroup>
//             <IconLink href="#" id="facebookIcon"></IconLink>
//             <IconLink href="#" id="twitterIcon"></IconLink>
//             <IconLink href="#" id="googleIcon"></IconLink>
//           </IconGroup>
//         </AlternativeLogin>
//       </LoginForm>
//     </Container>
//   );
// }
