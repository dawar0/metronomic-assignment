import { Sidebar } from "./components/blocks/Sidebar";
import { AddLabForm } from "./features/labs";
import Header from "./components/blocks/Header/Header";

function App() {
  return (
    <>
      <Sidebar>
        <Header />
        <AddLabForm />
      </Sidebar>
    </>
  );
}

export default App;
