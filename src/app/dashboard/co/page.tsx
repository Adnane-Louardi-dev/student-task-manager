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