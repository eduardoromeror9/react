import { useState, useEffect } from 'react';


const Formulario = () => {

  const [ nombre, setNombre ]               = useState('');
  const [ dueno,  setDueno ]                 = useState('');
  const [ email,  setEmail ]                 = useState('');
  const [ fecha,  setFecha ]                 = useState('');
  const [ observaciones, setObservaciones ] = useState('');

  const [ error, setError ] = useState(false);


  const handleSubmit = (e) => {

    e.preventDefault();

    // Validar Formulario
    if([nombre, dueno, email, fecha, observaciones].includes('')) {
      console.log('Todos los campos son obligatorios');

      setError(true);
      return;
    
    }

    setError(false);
    
  }
  



  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && 
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos los campos son obligatorios</p>
          </div>
        }
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
            value={ dueno }
            onChange={ e => setDueno(e.target.value) }         
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
            value={ email }
            onChange={ e => setEmail(e.target.value) }           
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
            value={ fecha }
            onChange={ e => setFecha(e.target.value) }          
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
            value={ observaciones }
            onChange={ e => setObservaciones(e.target.value) }          
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 px-4 rounded-lg cursor-pointer"
          value="Agregar Paciente"
        />

      </form>

    </div>
  )
}

export default Formulario