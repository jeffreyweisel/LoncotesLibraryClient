import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronList from "./components/tickets/PatronList";
import PatronDetails from "./components/tickets/PatronDetails";
import { EditPatronForm } from "./components/tickets/EditPatronForm";
import CheckoutList from "./components/tickets/CheckoutList";
import AvailableMaterialList from "./components/tickets/AvailableMaterialsList";
import OverdueCheckoutList from "./components/tickets/OverdueCheckoutList";
import { CreateCheckoutForm } from "./components/tickets/CreateCheckoutForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path="create" element={<CreateMaterial />} />
          <Route path=":id" element={<MaterialDetails />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path=":id/edit" element={<EditPatronForm />} />
        </Route>
        <Route path="checkouts">
          <Route index element={< CheckoutList />} />
          <Route path="create/:id" element={<CreateCheckoutForm/>} />
        </Route>
        <Route path="browse">
          <Route index element={< AvailableMaterialList />} />
        </Route>
        <Route path="overdue">
          <Route index element={<OverdueCheckoutList />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
