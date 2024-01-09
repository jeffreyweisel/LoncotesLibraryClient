import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getOverdueCheckouts } from "../../data/checkoutsData";

export default function OverdueCheckoutList() {
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    getOverdueCheckouts().then(setCheckouts);
  }, []);

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