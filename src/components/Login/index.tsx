// import React from "react";
// import { Row, Col, Button, Typography } from "antd";
// import firebase, { auth } from "../../firebase/config";
// import { addDocument, generateKeywords } from "../../firebase/services";
// import { AuthContext } from "../../Context/AuthProvider";
// import { AppContext } from "../../Context/AppProvider";
// import img from "../../assets/logo.jpg";
// import { Link } from "react-router-dom";
// import bgImg from "../../assets/landing.jpg";

// const { Title } = Typography;

// const fbProvider = new firebase.auth.FacebookAuthProvider();
// const googleProvider = new firebase.auth.GoogleAuthProvider();

// export default function Login() {
//   const {
//     user: { displayName, photoURL },
//   } = React.useContext(AuthContext);
//   const handleLogin = async (provider: firebase.auth.AuthProvider) => {
//     const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

//     if (additionalUserInfo?.isNewUser) {
//       addDocument("users", {
//         displayName: user?.displayName,
//         email: user?.email,
//         photoURL: user?.photoURL,
//         uid: user?.uid,
//         providerId: additionalUserInfo.providerId,
//         keywords: generateKeywords(user?.displayName?.toLowerCase()),
//       });
//     }
//   };
//   auth.onAuthStateChanged((user) => {
//     console.log({ user });
//   });
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "90%",
//           maxWidth: "400px",
//           padding: "10px",
//           backgroundColor: "#f5f5f5",
//           paddingBottom: "20px",
//           borderRadius: "20px",
//         }}
//       >
//         <img
//           src={img}
//           style={{
//             width: "100px",
//             height: "100px",
//             borderRadius: "50%",
//             margin: "0 auto",
//             display: "block",
//           }}
//         />
//         {photoURL === undefined ? (
//           <div>
//             {" "}
//             <Title
//               style={{
//                 textAlign: "center",
//                 fontSize: 25,
//                 color: "#444654",
//                 marginBottom: 60,
//                 marginTop: 60,
//               }}
//               level={3}
//             >
//               New to Music App? Sign up!
//             </Title>
//             <Button
//               style={{
//                 width: "100%",
//                 color: "#ff7262",
//                 paddingTop: "5px",
//                 paddingBottom: "10px",
//                 height: 50,
//                 fontSize: 20,
//                 marginBottom: 10,
//               }}
//               onClick={() => handleLogin(googleProvider)}
//             >
//               Continue with Google
//             </Button>
//             <Title style={{ textAlign: "center" }} level={4}>
//               or
//             </Title>
//             <Button
//               style={{
//                 width: "100%",
//                 backgroundColor: "#1877f2",
//                 color: "white",
//                 paddingTop: "5px",
//                 paddingBottom: "10px",
//                 height: 50,
//                 fontSize: 20,
//                 marginTop: 10,
//               }}
//               onClick={() => handleLogin(fbProvider)}
//             >
//               Continue with Facebook
//             </Button>
//           </div>
//         ) : (
//           <Link to="/">
//             {" "}
//             <Button
//               style={{
//                 width: "100%",
//                 color: "#ff7262",
//                 paddingTop: "5px",
//                 paddingBottom: "10px",
//                 height: 50,
//                 fontSize: 20,
//                 marginBottom: 10,
//                 marginTop: 10,
//               }}
//             >
//               Continue with Home
//             </Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { Row, Col, Button, Typography } from "antd";
// import firebase, { auth } from "../../firebase/config";
// import { addDocument, generateKeywords } from "../../firebase/services";
// import { AuthContext } from "../../Context/AuthProvider";
// import { AppContext } from "../../Context/AppProvider";
// import img from "../../assets/logo.jpg";
// import { Link } from "react-router-dom";
// import bgImg from "../../assets/landing.jpg";
// import {
//   GoogleLogin,
//   GoogleOAuthProvider,
//   useGoogleLogin,
// } from "@react-oauth/google";
// const { Title } = Typography;

// const fbProvider = new firebase.auth.FacebookAuthProvider();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const clientId =
//   "60783848892-451bnh6u5i95b3spgkqlot33rhrte5ji.apps.googleusercontent.com";

// export default function Login() {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "90%",
//           maxWidth: "400px",
//           padding: "10px",
//           backgroundColor: "#f5f5f5",
//           paddingBottom: "20px",
//           borderRadius: "20px",
//         }}
//       >
//         <img
//           src={img}
//           style={{
//             width: "100px",
//             height: "100px",
//             borderRadius: "50%",
//             margin: "0 auto",
//             display: "block",
//           }}
//         />

//         <div>
//           <GoogleOAuthProvider clientId={clientId}>
//             <GoogleLogin
//               onSuccess={(credentialResponse) => {
//                 console.log(credentialResponse);
//               }}
//               onError={() => {
//                 console.log("Login Failed");
//               }}
//             />
//           </GoogleOAuthProvider>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { handleLoginSuccessGG } from "../../utils/Token/login";

const Login: React.FC = () => {
  useGoogleOneTapLogin({
    onSuccess: handleLoginSuccessGG,
    onError: () => {
      console.log("Login Failed");
    },
  });

  return null;
};

export default Login;
