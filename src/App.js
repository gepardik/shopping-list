import React, {useState} from 'react'
import ProductList from './Products/ProductList'
import Context from "./context";
import AddProduct from "./Products/AddProduct";

function App() {
    const [products, setProducts] = useState([
        {id: 1, completed: false, title: 'Хлеб'},
        {id: 2, completed: false, title: 'Молоко'},
        {id: 3, completed: false, title: 'Масло'},
    ])

    function toggleProduct(id) {
        setProducts(products.map(product => {
            if (product.id === id) {
                product.completed = !product.completed
            }

            return product
        }))
    }

    function removeProduct(id) {
        setProducts(
            products.filter(product => product.id !== id)
        )
    }

    function addProduct(title) {
        setProducts(products.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

   return (
       <Context.Provider value={{ removeProduct }}>
           <div className='wrapper'>
               <h1>Список продуктов</h1>
               <AddProduct onCreate={addProduct}/>
               {products.length ? <ProductList products={products} onToggle={toggleProduct}/> : <p>Нет продуктов</p> }

           </div>
       </Context.Provider>
    );
}

export default App;
