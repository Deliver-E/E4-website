import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CompanyPage from './pages/company/CompanyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompanyPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
