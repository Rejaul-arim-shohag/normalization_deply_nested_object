import { useState } from "react"

const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"> {value} </button>
  )
}

//calulaion winner
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleSquareClick = (index) => {
    if(squares[index]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[index] = "X"
    }else{
      nextSquares[index] = "O"
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={()=>handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={()=>handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={()=>handleSquareClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={()=>handleSquareClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleSquareClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleSquareClick(5)}/>
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={()=>handleSquareClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleSquareClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleSquareClick(8)}/>
      </div>
    </>
  )
}

export default App
