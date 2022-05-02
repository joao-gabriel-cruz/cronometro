import { data } from 'autoprefixer'
import { useEffect, useState } from 'react'


function App() {



  var [hora, setHoras] = useState(0)
  var [minuto, setMinutos] = useState(0)
  var [segundo, setSegundos] = useState(0)
  var [parar, setParar] = useState(false)




  function start() {
    setParar(parar = !parar)
  }


  function sincronizarCronometro() {

    setTimeout(function rodar() {
      if (segundo >= 60) {
        setMinutos(minuto = minuto + 1)
        setSegundos(segundo = 0)
        clearTimeout(segundo)
      } else {
        setSegundos(segundo = segundo + 1)
      };
      if (minuto >= 60) {
        setHoras(hora = hora + 1)
        setMinutos(minuto = 0)
        clearTimeout(minuto)
      }
    }, 1000)
  }
  function reset() {
    setSegundos(segundo = 0)
    setMinutos(minuto = 0)
    setHoras(hora = 0)
  }

  parar ? stop : sincronizarCronometro()


  return (
    <div className="bg-black text-white">
      <div className='w-full h-screen flex items-center justify-center '>
        <div className='flex flex-col space-y-2 justify-center'>
          <div className='flex space-x-14 w-full h-[10rem] items-center justify-center text-5xl  border-[#949494] rounded-xl border-solid border-2 '>
            <p>{hora}</p>
            <p>{minuto}</p>
            <p>{segundo}</p>
          </div>
          <div className='flex flex-row space-x-5'>
            <button className='bg-[#0a004a] border-[#0a004a] border-solid border-2 w-[10rem] h-[3rem] ease-in duration-300 rounded-xl  hover:bg-[#4a9bff] ' onClick={start}>Stop/run</button>
            <button className='bg-[#52020e] border-[#52020e] border-solid border-2 w-[10rem] h-[3rem] ease-in duration-300 rounded-xl hover:bg-[#eb1717] ' onClick={reset}>reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
