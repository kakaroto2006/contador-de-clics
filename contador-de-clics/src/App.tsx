
import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)
  const LIMITE = 999999
  const [mensaje, setMensaje] = useState('Listo para comenzar.')

  // Incrementar contador
  const incrementar = () => {
    if (contador >= LIMITE) {
      setMensaje('Has alcanzado el límite máximo.')
      return
    }

    setContador(contador + 1)
    setMensaje('Contador aumentado correctamente.')
  }

  // Disminuir contador
  const disminuir = () => {
    if (contador <= 0) {
      setMensaje('El contador no puede ser menor que cero.')
      return
    }

    setContador(contador - 1)
    setMensaje('Contador disminuido correctamente.')
  }

  // Reiniciar contador
  const reiniciar = () => {
    setContador(0)
    setMensaje('Contador reiniciado correctamente.')
  }

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white">

      <h1 className="text-4xl font-bold text-cyan-400 mb-3 text-center">
        Contador de eventos
      </h1>

      <p className="text-gray-400 text-center mb-8">
        Registra tus observaciones de manera sencilla.
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">

        <h2 className="text-center text-gray-400 font-semibold mb-5">
          TOTAL DE EVENTOS
        </h2>

        <div className="bg-slate-950 rounded-xl p-8 mb-6 text-center">
          <p className="text-7xl font-bold text-white" aria-live="polite">
            {contador}
          </p>
          <p className="text-gray-500 mt-2">
            Eventos registrados
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={disminuir}
            disabled={contador === 0}
            className="bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white font-bold py-4 rounded-xl transition"
          >
            − Disminuir
          </button>

          <button
            onClick={incrementar}
            disabled={contador === LIMITE}
            className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-40 text-slate-950 font-bold py-4 rounded-xl transition"
          >
            + Incrementar
          </button>

        </div>

        <button
          onClick={reiniciar}
          disabled={contador === 0}
          className="w-full mt-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-slate-950 font-bold py-3 rounded-xl transition"
        >
          ↻ Reiniciar contador
        </button>

        <p className="text-center text-sm text-gray-400 mt-5" role="status">
          {mensaje}
        </p>

        <p className="text-center text-xs text-gray-500 mt-3">
          Validación: mínimo 0 y máximo 999999.
        </p>

      </div>

      <footer className="text-gray-600 text-sm mt-8">
        Aplicación desarrollada con React y Tailwind CSS
      </footer>

    </main>
  )
}

export default App
