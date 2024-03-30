import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Favourites from './pages/favourites/Favourites'
import Details from './pages/details/Details'
import Recipes from './pages/recipes/Recipes'
import FavDetails from './pages/details/FavDetails'

function App() {

  return (
    <div className=''>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/fav/:id' element={<FavDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
