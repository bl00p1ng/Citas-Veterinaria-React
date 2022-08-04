const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">Luna</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">Andrés</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">andres@email.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {''}
        <span className="font-normal normal-case">5 Agosto 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">No esta comiendo bien</span>
      </p>
    </div>
  )
}

export default Patient
