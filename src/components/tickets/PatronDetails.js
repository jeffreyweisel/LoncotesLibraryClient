import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getPatron } from "../../data/patronsData";


export default function PatronDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patron, setPatron] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getPatron(id).then(setPatron);
  }, []);

  console.log(patron);

  if (!patron) {
    return null;
  }

  const handleButtonClick = () => {
    navigate(`/patrons/${patron.id}/edit`)
  }

  return (
    <div className="container">
      <h2>
        {patron.firstName} {patron.lastName}
      </h2>
      <Button onClick={handleButtonClick}>Edit</Button>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>{patron.email}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{patron.address}</td>
          </tr>
          <tr>
            <tr>
              <th scope="row">Active Member</th>
              <td>{patron.isActive ? "Yes" : "No"}</td>
            </tr>
            <tr>
            <th scope="row">Late Fees</th>
            <td>{patron.balance}</td>
          </tr>
          </tr>
        </tbody>
      </Table>
      <h5>Checkouts</h5>
      {patron.checkouts?.length ? (
        <Table>
          <thead>
            <tr>
              <th>Material Name</th>
              <th>Type</th>
              <th>Checkout Date</th>
              <th>Return Date</th>
              <th>Late Fees</th>
            </tr>
          </thead>
          <tbody>
            {patron.checkouts.map((co) => (
              <tr key={`checkout-${co.id}`}>
                <td>{co.material.materialName}</td>
                <td>{co.material.materialType.name}</td>
                <td>{co.checkoutDate?.split("T")[0]}</td>
                <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                <td>{co.lateFee || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No checkouts for this patron</p>
      )}
    </div>
  );
}
