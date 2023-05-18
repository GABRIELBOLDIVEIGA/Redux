import PaginaPadrao from 'components/PaginaPadrao';
import Home from 'pages/Home';
import Categoria from 'pages/Categoria';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
        </Route>
        <Route path='*' element={<h1>Algo de Errado não esta certo...</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}