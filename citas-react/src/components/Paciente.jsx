
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, dueno, email, fecha, observaciones, id } = paciente;

  const handleEliminar = () => {
    const respuesta = window.confirm('¿Estas seguro de eliminar este paciente?');

    if(respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md my-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case ">{ nombre }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
          <span className="font-normal normal-case ">{ dueno }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case ">{ email }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case ">{ fecha }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Observaciones: {''}
          <span className="font-normal normal-case ">{ observaciones }</span>
        </p>

        <div className="flex justify-between mt-10">

          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-10 rounded-lg cursor-pointer"   
            onClick={ () => setPaciente(paciente) }       
          >Editar</button>

          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-lg cursor-pointer"
            onClick={ handleEliminar }
          >Eliminar</button>

        </div>

      </div>
  )
}

export default Paciente