import { useState, useEffect } from 'react';


const Formulario = () => {

  const [ nombre, setNombre ] = useState('');
  



  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={ nombre }
            onChange={ e => setNombre(e.target.value) }
          
          />
        </div>

        <div className="mb-5">
          <label htmlFor="dueño" className="block text-gray-700 uppercase font-bold">
            Nombre Dueño
          </label>

          <input
            id="dueño"
            type="text" 
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt-2 rounded-md"           
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input
            id="email"
            type="email" 
            placeholder="Ingresa el email"
            className="border-2 w-full p-2 mt-2 rounded-md"           
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>

          <input
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 rounded-md"           
          />
        </div>

        <div className="mb-5">
          <label htmlFor="observaciones" className="block text-gray-700 uppercase font-bold">
            Observaciones
          </label>

          <textarea
            id="observaciones"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Describe los sintomas"          
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 px-4 rounded-lg cursor-pointer "
          value="Agregar Paciente"
        />

      </form>

    </div>
  )
}

export default Formulario