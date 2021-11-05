import React from "react";
import { Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "../../features/activities/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  //const location = useLocation();

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivityDashboard />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route
            key="add-activity"
            path="/createActivity"
            element={<ActivityForm />}
          />
          <Route
            key="edit-activity"
            path="/manage/:id"
            element={<ActivityForm />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
// vrati app sa mocima MobXa
