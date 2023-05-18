import PaginaPadrao from 'components/PaginaPadrao';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='*' element={<h1>Algo de Errado não esta certo...</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}