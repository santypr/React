import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Challenges</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link> | {" "}
        <Link to="/challenges">Challenges</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
