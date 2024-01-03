import devFrasesLogo from './assets/logo.png'
import './App.css'
import { useState } from 'react'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      categoria: 'Motivação',
      frases: [
        'O primeiro passo para o sucesso é acreditar que é possível.',
        'A persistência é a chave para superar qualquer obstáculo na vida.',
        'Seja a mudança que você deseja ver no mundo.',
        'Cada pequeno progresso é um passo em direção aos seus sonhos.',
        'A vida é uma jornada, não um destino. Aproveite o caminho.',
        'A positividade é a faísca que acende a chama da realização.',
        'Acredite no seu potencial, você é mais forte do que imagina.',
        'Grandes coisas nunca vêm de zonas de conforto.',
        'Os desafios são oportunidades disfarçadas. Abra as portas da sua mente.',
        'O sucesso é a soma de pequenos esforços repetidos dia após dia.'
      ]
    },
    {
      id: 2,
      categoria: 'Programação',
      frases: [
        'A programação é a arte de dar vida às ideias.',
        'Erros são apenas feedbacks valiosos para melhorar seu código.',
        'Cada linha de código é uma nova oportunidade de aprender algo novo.',
        'A lógica é a linguagem universal da programação.',
        'Programadores não resolvem problemas, criam soluções inovadoras.',
        'A criatividade na codificação é a chave para a excelência.',
        'A tecnologia muda o mundo, e os programadores constroem esse futuro.',
        'A simplicidade é a melhor amiga do código limpo e eficiente.',
        'Cada bug é um novo mistério para ser resolvido com lógica e paciência.',
        'A melhor parte da programação é transformar ideias em realidade digital.'
      ]
    },
    {
      id: 3,
      categoria: 'Bom dia',
      frases: [
        'Cada novo amanhecer é uma nova oportunidade para alcançar seus objetivos.',
        'Um sorriso pela manhã pode iluminar todo o seu dia.',
        'Que seu dia seja tão brilhante quanto o sol que nasce.',
        'Comece o dia com gratidão e termine com realização.',
        'Um bom dia começa com bons pensamentos e boas intenções.',
        'Que hoje seja um dia cheio de sorrisos, alegria e conquistas.',
        'Aproveite cada momento, pois cada dia é uma página em branco para escrever sua história.',
        'Um bom dia começa com uma xícara de café e uma mente cheia de possibilidades.',
        'Deixe o dia te surpreender com sua beleza e oportunidades.',
        'Que seu dia seja repleto de energia positiva e boas vibrações.'
      ]
    }
  ]

  function handleCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function geraFrase() {
    let fraseAleatoria = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    )
    setTextoFrase(allFrases[categoriaSelecionada].frases[fraseAleatoria])
  }

  return (
    <div className="container">
      <img src={devFrasesLogo} alt="Logo dev frases" className="logo" />
      <h2 className="title"> Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            onClick={() => handleCategory(index)}
            style={{
              borderWidth:
                item.categoria === allFrases[categoriaSelecionada].categoria
                  ? 2
                  : 0,
              borderColor: '#1fa4db'
            }}
          >
            {item.categoria}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={geraFrase}>
        Gerar frase
      </button>
      {textoFrase !== '' && (
        <p className="texto-frase"> {`"${textoFrase}"`} </p>
      )}
    </div>
  )
}

export default App
