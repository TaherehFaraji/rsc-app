// import { getProducts } from './data/Products.js'
// import AddToCartButton from './AddToCartButton.jsx'
import ServerTodoList from './ServerTodoList.jsx'
import Accordion from "./components/Accordion";
import UserProfile from "./components/UserProfile";

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
      <h1>User Profile</h1>
      <Accordion title="show">
        <UserProfile />
      </Accordion>
    </div>
  );
}

export default App