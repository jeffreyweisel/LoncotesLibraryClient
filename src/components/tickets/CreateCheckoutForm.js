import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCheckout } from "../../data/checkoutsData";
import { getMaterials } from "../../data/materialsData";

export const CreateCheckoutForm = () => {
  const navigate = useNavigate();
  const [material, setMaterial] = useState({});
  const [patronId, setPatronId] = useState("");
  const { id: materialId } = useParams();

  useEffect(() => {
    getMaterials(materialId).then((mObj) => setMaterial(mObj));
  }, [materialId]);

  const handleCheckout = (event) => {
    event.preventDefault();

    const newCheckout = {
      materialId,
      patronId: parseInt(patronId),
    };
    createCheckout(newCheckout);
    console.log(newCheckout);
    navigate("/checkouts");
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>New Checkout</h4>
      </div>
      <div className="form-list">
        <h6>Enter Patron ID</h6>
        <h6>1 = Peter Parker, 2 = Tony Stark</h6>
        <input
          type="text"
          value={patronId}
          onChange={(event) => setPatronId(event.target.value)}
        />
        <button onClick={handleCheckout}>Save</button>
      </div>
    </div>
  );
};
