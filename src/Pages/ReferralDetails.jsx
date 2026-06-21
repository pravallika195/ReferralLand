import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react";
import Cookies from "js-cookie";
import Navbar from "../Components/Navbar"

function ReferralDetails() {
  const {id}=useParams();
  const [referral,setReferral]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  console.log(id);
  useEffect(() =>{
        const fetchReferral=async()=>{
            try{
              const token =Cookies.get("token");
              const response= await fetch(`https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`,
              {
                headers:{
                  Authorization:`Bearer ${token}`
                }
              }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            const data=await response.json();
            console.log(data);
            const selectedReferral = data.data.referrals.find(
              (item) => item.id === Number(id)
            );

            setReferral(selectedReferral);
          }
          catch(err){
            setError("Referral not found");
            console.log(err);
          }
           finally {
      setLoading(false);
      }
        };
      fetchReferral();
      },[id])
   if (loading) {
    return <p>Loading...</p>;
    }

  if (error || !referral) {
    return <h1>Referral not found</h1>;
  }
  console.log(referral);
  return (
  <>
  <Navbar/>
  <div className="page-container details-page">
    <Link className="back-link" to="/">
      ← Back to Dashboard
    </Link>

    <h1 className="details-title">
      Referral Details
    </h1>

    <p className="details-subtitle">
      Full information for this referral
      partner.
    </p>

    <div className="card details-card">
  <div className="details-header">
    <h2 className="details-name">
      {referral.name}
    </h2>

    <span className="service-badge">
      {referral.serviceName}
    </span>
  </div>

  <div className="details-grid">
    <div className="detail-row">
      <span className="detail-label">
        REFERRAL ID
      </span>

      <span className="detail-value">
        {referral.id}
      </span>
    </div>

    <div className="detail-row">
      <span className="detail-label">
        NAME
      </span>

      <span className="detail-value">
        {referral.name}
      </span>
    </div>

    <div className="detail-row">
      <span className="detail-label">
        SERVICE NAME
      </span>

      <span className="detail-value">
        {referral.serviceName}
      </span>
    </div>

    <div className="detail-row">
      <span className="detail-label">
        DATE
      </span>

      <span className="detail-value">
        {referral.date?.replaceAll("-", "/") || "N/A"}
      </span>
    </div>

    <div className="detail-row">
      <span className="detail-label">
        PROFIT
      </span>

      <span className="detail-value">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(referral.profit)}
      </span>
    </div>
  </div>
  </div>
  </div>
  </>
);
}   
export default ReferralDetails;