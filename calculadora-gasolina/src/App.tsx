import { FormEvent, useState } from 'react'

import imgPosto from './assets/logo.png'

import './App.css'

interface InfoProps {
  title: string
  gasolina: number
  alcool: number
}

function App() {
  const [inputGasolina, setInputGasolina] = useState(1)
  const [inputAlcool, setInputAlcool] = useState(1)
  const [info, setInfo] = useState<InfoProps>()

  function calcularValorLitro(event: FormEvent) {
    event.preventDefault()
    let valor = inputAlcool / inputGasolina

    if (valor <= 0.7) {
      setInfo({
        title: 'Compensa comprar Álcool',
        alcool: inputAlcool,
        gasolina: inputGasolina
      })
    } else {
      setInfo({
        title: 'Compensa comprar Gasolina',
        alcool: inputAlcool,
        gasolina: inputGasolina
      })
    }
  }

  function formataMoeda(moeda: number) {
    let moedaFormatada = moeda.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    return moedaFormatada
  }

  return (
    <main>
      <div className="container">
        <h1 className="title">Calculadora posto gasolina</h1>
        <img src={imgPosto} alt="Logo posto de gasolina" />

        <form className="formulario" onSubmit={calcularValorLitro}>
          <label>Gasolina (Preço por litro): </label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={inputGasolina}
            onChange={(e) => setInputGasolina(Number(e.target.value))}
          />
          <label>Álcool (Preço por litro): </label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={inputAlcool}
            onChange={(e) => setInputAlcool(Number(e.target.value))}
          />
          <input className="button" type="submit" value="Calcular" />
        </form>
        {info && Object.keys(info) && (
          <section className="result">
            <h2 className="result-title"> {info?.title} </h2>

            <span>Álcool {formataMoeda(info?.alcool)} </span>
            <span>Gasolina {formataMoeda(info?.gasolina)} </span>
          </section>
        )}
      </div>
    </main>
  )
}

export default App
