
const Paciente = ({ paciente }) => {

  const { nombre, dueno, email, fecha, observaciones } = paciente;


  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
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
      </div>
  )
}

export default Paciente