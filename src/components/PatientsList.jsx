import Patient from './Patient.jsx';

const PatientsList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {/* LISTADO DE LOS PACIENTES */}
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  )
}

export default PatientsList