import Index from './components/Home/Index'
import MarketPlace from './components/MarketPlace/MarketPlace'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './components/MarketPlace/Context/DataContext';

function App() {
  

  return (
    <DataProvider>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/Marketplace" element={<MarketPlace/>}/>

        </Routes>
    </BrowserRouter>
    </DataProvider>

  )
}

export default App
