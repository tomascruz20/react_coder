
import './App.css'
import { ItemListContainer } from './components/itemListContainer'
import { Navbar } from "./components/NavBar"

function App() {
  return (
  <>  
  <Navbar/>
  <ItemListContainer greeting="hi"/>
  </>
  )
}

export default App
