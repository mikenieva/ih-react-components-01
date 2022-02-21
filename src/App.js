// 1. IMPORTACIONES
import logo from './logo.svg';
import './App.css';
import Header from './Header'


// 2. FUNCIÓN (COMPONENTE)

// function suma(a,b) {
  
//   // ... sentencias, instrucciones par apoder retornar correctamente un resultado
//   const numA = parseInt(a)
//   const numB = parseInt(b)
  
//   return numA + numB
// }

// suma(1,2)


function App() {

  // sentencias, instrucciones, lógica
  const name = "Mike"

  // VOY A APLICAR UN FORMATO MUY SIMILAR A HANDLEBARS QUE SE LLAMA JSX
  return ( 
    <div className="App">
      <Header nombre={name} />
    </div>
  );
}

// 3. EXPORTACIÓN
// module.exports = App
export default App;
