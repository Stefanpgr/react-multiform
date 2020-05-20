import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';

import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import DashboardLayout from "./view/Dashboard/DashboardLayout";
import ApplicationStage from "./view/Dashboard/ApplicationStage";
import Application from "./view/ApplicationPage/Index";
import Profile from "./view/Dashboard/Profile";
import EditProfile from "./view/Dashboard/EditProfile";
import Dashboard from "./view/Dashboard/Dashboard";
import Documents from "./view/Dashboard/Documents";
import Test from "./view/ApplicationPage/Test";
import Signup from "./view/Signup";
import SignupSuccess from "./view/Dashboard/pages/SignupSuccess";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

function App() {
  // const loading = () => <div>loading...</div>;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/test" component={AppSidebar} /> */}
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/test" component={Test} /> */}
            <Route exact path="/apply" component={Application} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/success" component={SignupSuccess} />
            <Route
              exact
              path="/application-process"
              component={ApplicationStage}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/profile" component={Profile} />
            <Route exact path="/dashboard/docs" component={Documents} />
            <DashboardLayout />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
