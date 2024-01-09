import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { activatePatron, deactivatePatron, getPatrons } from "../../data/patronsData";

export default function PatronList() {
  const [patrons, setPatrons] = useState([]);

  useEffect(() => {
    getPatrons().then(setPatrons);
  }, []);

  const handleDeactivateButtonClick = async (id) => {
    console.log("Deactivating patron with ID:", id);
    await deactivatePatron(id);
    const updatedPatronStatus = await getPatrons()
    setPatrons(updatedPatronStatus)
  };

  const handleActivateButtonClick = async (id) => {
    console.log("Deactivating patron with ID:", id);
    await activatePatron(id);
    const updatedPatronStatus = await getPatrons()
    setPatrons(updatedPatronStatus)
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Active Member</th>
          </tr>
        </thead>
        <tbody>
          {patrons.map((p) => (
            <tr key={`patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.email}</td>
              <td>{p.address}</td>
              <td>{p.isActive ? "Yes" : "No"}</td>
              <td>
                {p.isActive && (
                  <Button onClick={() => handleDeactivateButtonClick(p.id)}>
                    Deactivate
                  </Button>
                )}
                {p.isActive === false && (
                  <Button onClick={() => handleActivateButtonClick(p.id)}>
                    Activate
                  </Button>
                )}
              </td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
