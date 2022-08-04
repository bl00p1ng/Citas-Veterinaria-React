const Form = () => {
  return (
    <div className="mx-3 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      {/* FORMULARIO REGISTRO PACIENTES */}
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {/* NOMBRE MASCOTA */}
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="petName"
          >
            Nombre Mascota
          </label>
          <input 
            id="petName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota"
          />
        </div>

        {/* NOMBRE PROPIETARIO */}
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="ownerName"
          >
            Nombre Propietario
          </label>
          <input 
            id="ownerName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
          />
        </div>

        {/* EMAIL PROPIETARIO */}
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="email"
          >
            Email
          </label>
          <input 
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email de Contacto"
          />
        </div>

        {/* FECHA DE ALTA */}
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="date"
          >
            Fecha de Alta
          </label>
          <input 
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
          />
        </div>

        {/* SINTOMAS */}
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold" 
            htmlFor="symptoms"
          >
            Síntomas
          </label>
          <textarea 
            name="symptoms" 
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
          />
        </div>

        {/* ENVIAR FORM */}
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar paciente"
        />
      </form>
    </div>
  )
}

export default Form