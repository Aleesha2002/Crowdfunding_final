import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import App_homepage from "./App_homepage";
import App_campaign from "./App_campaign";
// import App_signup from "./App_signup";
import { SignUp, StarsCanvas, Login, About, Contact } from "./components";
import { Context } from "./context/Context";
import { Sidebar, Navbar1 } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages/index";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App_homepage />
        </Route>

        <Route path="/signup">
          <div className="relative z-0 bg-primary1">
            <div className="relative z-0">
              <SignUp />
              <StarsCanvas />
            </div>
          </div>
        </Route>

        <Route path="/home">
          <App_campaign />
        </Route>

        <Route path="/profile">
          <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative">
              <Sidebar />
            </div>
            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
              <Navbar1 />
              <Profile />
            </div>
          </div>
        </Route>

        <Route path="/create-campaign">
          <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative">
              <Sidebar />
            </div>
            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
              <Navbar1 />
              <CreateCampaign />
            </div>
          </div>
        </Route>

        <Route path="/campaign-details/:id">
          <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative">
              <Sidebar />
            </div>
            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
              <Navbar1 />
              <CampaignDetails />
            </div>
          </div>
        </Route>

        <Route path="/login">
          {user ? (
            <App_campaign />
          ) : (
            <div className="relative z-0 bg-primary1">
              <div className="relative z-0">
                <Login />
                <StarsCanvas />
              </div>
            </div>
          )}
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
