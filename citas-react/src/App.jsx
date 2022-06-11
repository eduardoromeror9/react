import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {  

  const [ pacientes, setPacientes ] = useState([])

  const imprime2mas2 = () => {
    console.log(2+2)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
        numeros={1}
        isAdmin={false}
        fn={imprime2mas2}
      />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
