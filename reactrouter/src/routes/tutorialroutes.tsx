import { Route, useRoutes } from "react-router";
import App from "../App";
import { Challenge } from "../components/challenges/challenge";
import { Challenges } from "../components/challenges/challenges";
import Expenses from "../components/expenses/expenses";
import Invoice from "../components/invoices/invoice";
import { Invoices } from "../components/invoices/invoices";

// <Route path="/" element={<App />}>
//           <Route path="expenses" element={<Expenses />} />
//           <Route path="invoices" element={<Invoices />}>
//             <Route
//               index
//               element={
//                 <main style={{ padding: "1rem" }}>  
//                   <p>Select an invoice</p>
//                 </main>
//               }
//             />
//             <Route path=":invoiceId" element={<Invoice />} />
//           </Route>
//           <Route
//             path="*"
//             element={
//               <main style={{ padding: "1rem" }}>  
//                 <p>There's nothing here!</p>
//               </main>
//             }
//           />
//         </Route>

export const MyRouter = () => {
   const tutorialRoutes = useRoutes([
      // These are the same as the props you provide to <Route>
      { 
        path: "/", 
        element: <App />,
        children: [
          {
            path: "invoices",
            element: <Invoices />,
            // Nested routes use a children property, which is also
            // the same as <Route>
            children: [
              { index: true, element: <main style={{ padding: "1rem" }}><p>Select an invoice</p></main> },
              { path: ":invoiceId", element: <Invoice /> }
            ],
          },
          // Not found routes work as you'd expect
          {
            path: "expenses",
            element: <Expenses />
          },
          {
            path: "challenges",
            element: <Challenges />,
            // Nested routes use a children property, which is also
            // the same as <Route>
            children: [
              { index: true, element: <main style={{ padding: "1rem" }}><p>Select a challenge</p></main> },
              { path: ":id", element: <Challenge /> }
            ],
          },
        ]
      },
      { path: "*", element: <main>NOTHING HERE</main> }
    ]);
  
  return tutorialRoutes;
}