import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ReferralDetails from "./pages/ReferralDetails";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/referral/:id' element={
          <ProtectedRoute>
            <ReferralDetails/>
          </ProtectedRoute>
        }/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;