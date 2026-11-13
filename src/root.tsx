// import { getProducts } from './data/Products.js'
// import AddToCartButton from './AddToCartButton.jsx'
import ServerTodoList from './ServerTodoList.jsx'

export function Root() {
  return (
    <html lang="en">
      <body>
        <App />
      </body>
    </html>
  )
}

async function App() {
  // const products = await getProducts();

  return (
        <div>
            <ServerTodoList />
        </div>
    );
}

export default App