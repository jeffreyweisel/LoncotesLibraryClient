import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatron, updatePatron } from "../../data/patronsData";


export const EditPatronForm = () => {
  const [patron, setPatron] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPatron(id).then(setPatron);
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const editedPatron = {
      id: patron.id,
      firstName: patron.name,
      lastName: patron.lastName,
      email: patron.email,
      address: patron.address,
      isActive: patron.isActive
    };

    updatePatron(editedPatron).then(() => {
      navigate(`/patrons`);
    });
  };

  const handleInputChange = (event) => {
    const stateCopy = { ...patron };
    stateCopy[event.target.name] = event.target.value;
    setPatron(stateCopy);
  };

  return (
    <form className="profile">
      <h2>Update Patron Details</h2>
      <fieldset>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            value={patron.email ? patron.email : ""}
            onChange={handleInputChange}
            required
            className="form-control"
            name="email"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Address: </label>
          <input
            type="text"
            value={patron.address ? patron.address : ""}
            onChange={handleInputChange}
            required
            className="form-control"
            name="address"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </fieldset>
    </form>
  );
};