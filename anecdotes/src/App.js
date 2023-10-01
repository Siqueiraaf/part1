import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const mostVotedIndex = votes.indexOf(Math.max(...votes))
  const mostVotedAnecdote = anecdotes[mostVotedIndex]

  return (
    <div>
      <h1>Software Engineering Anecdotes</h1>
      <h2>Current Anecdote</h2>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <h2>Most Voted Anecdote</h2>
      {mostVotedAnecdote && (
        <p>
          <strong>Anecdote:</strong> {mostVotedAnecdote}
          <br />
          <strong>Votes:</strong> {votes[mostVotedIndex]}
        </p>
      )}

      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr><td>Good:</td><td>{votes[0]}</td></tr>
          <tr><td>Neutral:</td><td>{votes[1]}</td></tr>
          <tr><td>Bad:</td><td>{votes[2]}</td></tr>
          <tr><td>Total Feedbacks:</td><td>{votes.reduce((a, b) => a + b, 0)}</td></tr>
          <tr><td>Average Score:</td><td>{((votes[0] - votes[2]) / votes.reduce((a, b) => a + b, 0)).toFixed(2)}</td></tr>
          <tr><td>Positive Feedback Percentage:</td><td>{((votes[0] / votes.reduce((a, b) => a + b, 0)) * 100).toFixed(2) + '%'}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default App