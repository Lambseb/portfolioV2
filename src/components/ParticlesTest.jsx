// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`,

// function ParticlesTest() {
//   async function loadParticles(main) {
//     await loadFull(main);
//   }
//   return (
//     <>
//       <ParticlesTest
//         id="test_particles"
//         init={loadParticles}
//         options={{
//           background: {
//             color: {
//               value: "#ff6f45",
//             },
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 6,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 5 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//       ;
//     </>
//   );
// }

// export default ParticlesTest;
