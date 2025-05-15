// "use client";

// import { useState } from "react";

// export default function NameInput() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h2>Your name is: {name || "..."}</h2>
//       <input
//         type="text"
//         placeholder="Type your name"
//         value={name} onChange={(e) => setName(e.target.value)}
//       />
//     </div>
//   );
// }

// 'use client';
// import { useState, useEffect } from "react";

// export default function Co() {
//   const [count, setCount] = useState(0);
//   const [produit, setProduit] = useState(0);

//   useEffect(()=>{
//     setProduit(()=> count * 2);
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <p>PRODUIT: {produit}</p>
//     </div>
//   );
// }

// import Cou from "@/components/counter";

// export default function Co(){
//   return(
//     <Cou nom={'anass'}/>
//   )
// }

// npx create-next-app nomDeProjet
// export default function hello (props) {
//return (
// <div< 
// h1 hello props name)}
// import React, { useState } from "react";

// export default function SimpleForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">Simple Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 block w-full border p-2 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>

//       {submitted && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold">Submitted Data:</h3>
//           <p><strong>Name:</strong> {name}</p>
//           <p><strong>Email:</strong> {email}</p>
//         </div>
//       )}
//     </div>
//   );
// }