import { useState } from 'react'
import useClima from "../hooks/useClima"


const Formulario = () => {

  const [ alerta, setAlerta ] = useState('');
  const { busqueda, datosBusqueda, consultarClima } = useClima()
  const { ciudad, pais } = busqueda

  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios')
      return
    }
    setAlerta('')
    consultarClima(busqueda)
  }

  return (

    <div className='contenedor'>
      
      { alerta && <p>{alerta}</p> }

      <form onSubmit={ handleSubmit }>
        <div className='campo'>
          <label htmlFor='ciudad'>Nombre de la ciudad</label>
          <input
            type='text'
            id='ciudad'
            name='ciudad'
            placeholder='Ej: Santiago'
            onChange={ datosBusqueda }
            value={ ciudad }
          />
        </div>

        <div className='campo'>
          <label htmlFor='pais'>Pais</label>
          <select
            id='pais'
            name='pais'
            onChange={ datosBusqueda }
            value={ pais }
          >
            <option value=''>--- Selecciona un país ---</option>
            <option value='CL'>Chile</option>
            <option value='VE'>Venezuela</option>
            <option value='US'>Estados Unidos</option>
            <option value='ES'>España</option>
            <option value='MX'>México</option>
            <option value='AR'>Argentina</option>
            <option value='CO'>Colombia</option>
          </select>            
        </div>

        <input type='submit' value='Consultar Clima'/>

      </form>  
    </div>
  )
}

export default Formulario