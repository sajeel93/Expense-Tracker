import './App.css';
import './style.css';
import Header from "./Components/Header";
import Total from "./Components/Total";
import IncomeExpenses from "./Components/IncomeExpences";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import GlobalContext from './Context/GlobalContext'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <GlobalContext>
      <Header />
      <Total />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalContext>
  );
}

export default App;
