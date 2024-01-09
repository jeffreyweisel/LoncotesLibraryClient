import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAvaialbleMaterials } from "../../data/materialsData";
import { createCheckout } from "../../data/checkoutsData";

export default function AvailableMaterialList() {
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAvaialbleMaterials().then(setMaterials);
  }, []);

  const handleButtonClick = (id) => {
    navigate(`/checkouts/create/${id}`);
  };
  
  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
              {m.outOfCirculationSince == null && (
                  <Button onClick={() => handleButtonClick(m.id)}>
                   Checkout
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}