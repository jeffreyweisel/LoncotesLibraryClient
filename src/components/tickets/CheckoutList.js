import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getCheckouts, returnCheckout } from "../../data/checkoutsData";
import { Link } from "react-router-dom";

export default function CheckoutList() {
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    getCheckouts().then(setCheckouts);
  }, []);

  const handleButtonClick = async (id) => {
    console.log("Returning checkout with ID:", id);
    await returnCheckout(id);
    const updatedCheckouts = await getCheckouts();
    setCheckouts(updatedCheckouts);
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material</th>
            <th>Type</th>
            <th>Genre</th>
            <th>Checkout Date</th>
            <th>Return Date</th>
            <th>Patron</th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((c) => (
            <tr key={`checkouts-${c.id}`}>
              <th scope="row">{c.id}</th>
              <td>{c.material.materialName}</td>
              <td>{c.material.materialType.name}</td>
              <td>{c.material.genre.name}</td>
              <td>{c.checkoutDate}</td>
              <td>{c.returnDate}</td>
              <td>{c.patron.firstName} {c.patron.lastName}</td>
              <td>
                {c.returnDate == null && (
                  <Button onClick={() => handleButtonClick(c.id)}>
                    Return
                  </Button>
                )}
              </td>

              {/* <td>
                <Link to={`${c.id}`}>Details</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
