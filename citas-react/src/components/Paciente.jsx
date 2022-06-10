
const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case ">Nucita</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
          <span className="font-normal normal-case ">Eduardo</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case ">eduardo@eduardo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case ">10 Enero de 2022</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Observaciones: {''}
          <span className="font-normal normal-case ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa corporis inventore animi nobis nihil numquam, veniam unde accusantium debitis, nemo deleniti deserunt vel reiciendis labore ut. Velit vel aperiam iusto.</span>
        </p>
      </div>
  )
}

export default Paciente