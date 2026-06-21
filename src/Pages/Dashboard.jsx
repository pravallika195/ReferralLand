import {useEffect,useState} from "react";
import Cookies from "js-cookie";
import Navbar from "../Components/Navbar";
import OverviewCards from "../Components/OverviewCards";
import ReferralTable from "../Components/ReferralTable";
import ServiceSummary from "../Components/ServiceSummary";
import ShareReferral from "../Components/ShareReferral";
import Footer from "../Components/Footer";

function Dashboard() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("desc");

    useEffect(()=>{
      const fetchReferral=async()=>{
        try{
          const token=Cookies.get("token");
        const response=await fetch(`https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${search}&sort=${sort}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });
        if(!response.ok){
          throw new Error("Failed to fetch");
        }
        const data=await response.json();
        setDashboardData(data.data);
        }
        catch(err){
          setError(err.message);
        }
        finally{
          setLoading(false);
        }
      }
      fetchReferral();
    },[search,sort]);
    
    if(loading){
      return <h1>Loading...</h1>
    }
    if(error){
      return <h1>{error}</h1>
    }
  return (
  <>
    <Navbar />

    <main className="page-container dashboard-page">
      <OverviewCards metrics={dashboardData?.metrics} />

      <ServiceSummary
        serviceSummary={dashboardData?.serviceSummary}
      />

      <ShareReferral
        referral={dashboardData?.referral}
      />

      <ReferralTable
        referrals={dashboardData?.referrals}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
    </main>

    <Footer />
  </>
);
}   
export default Dashboard;