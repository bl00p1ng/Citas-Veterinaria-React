import {useState, useEffect} from 'react'  

const Form = () => {
  // State de los campos del form
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  // Si hay un error en los campos del form
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    // Validar form
    if ([name, owner, email, date, symptoms].includes('')) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <div className="mx-3 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      {/* FORMULARIO REGISTRO PACIENTES */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {/* MENSAJE DE ERROR */}
        {error && 
          <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
            <p>Todos los campos son obligatorios</p>
          </div>
        }

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
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={owner}
            onChange={e => setOwner(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={date}
            onChange={e => setDate(e.target.value)}
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
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
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