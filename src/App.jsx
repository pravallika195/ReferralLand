import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import ReferralDetails from "./Pages/ReferralDetails";
import NotFound from "./Pages/NotFound";
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