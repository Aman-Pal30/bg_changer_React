import { useEffect, useState } from 'react'

function App() {
  const [color, setColor] = useState(() => localStorage.getItem('bgcolor') || 'pink')

  useEffect(() => {
    localStorage.setItem("bgcolor", color);
  }, [color]);

  const h1Style = {
    color: color === 'yellow' || color === 'pink' || color === 'aqua' || color === 'silver' ? 'black' : 'white'
  }
  return (
    <div className='bg' style={{backgroundColor: color}}>
      <h1 style={h1Style}>This is {color} color</h1>
     <div className='bottom'>
      <div className='content'>
        <button onClick={() => setColor('red')} style={{backgroundColor: 'red'}}>
          Red
        </button>
        <button onClick={() => setColor('green')} style={{backgroundColor: 'green'}}>
          Green
        </button>
        <button onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}}>
          Blue
        </button>
        <button onClick={() => setColor('yellow')} style={{backgroundColor: 'yellow', color: 'black'}}>
          Yellow
        </button>
        <button onClick={() => setColor('pink')} style={{backgroundColor: 'pink', color: 'black'}}>
          Pink
        </button>
        <button onClick={() => setColor('orange')} style={{backgroundColor: 'orange'}}>
          Orange
        </button>
        <button onClick={() => setColor('brown')} style={{backgroundColor: 'brown'}}>
          Brown
        </button>
        <button onClick={() => setColor('purple')} style={{backgroundColor: 'purple'}}>
          Purple
        </button>
        <button onClick={() => setColor('grey')} style={{backgroundColor: 'grey'}}>
          Grey
        </button>
        <button onClick={() => setColor('aqua')} style={{backgroundColor: 'aqua', color: 'black'}}>
          Aqua
        </button>
        <button onClick={() => setColor('black')} style={{backgroundColor: 'black'}}>
          Black
        </button>
        <button onClick={() => setColor('silver')} style={{backgroundColor: 'silver', color: 'black'}}>
          Silver
        </button>
        <button onClick={() => setColor('gold')} style={{backgroundColor: 'gold'}}>
          Gold
        </button>
      </div>
     </div>
    </div>
  )
}

export default App
