import './App.css'
//LAYOUT PROYECTO
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {


  return (
    <>
     <Navbar />

     <ItemListContainer greeting={"Bienvenid@ a mi E-commrece"}/>

    </>

    
  )
}

export default App
