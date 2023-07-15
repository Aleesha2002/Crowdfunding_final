import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import App_homepage from "./App_homepage";
import App_campaign from "./App_campaign";
//import App_signup from "./App_signup";
import { Signup1, StarsCanvas, About, Contact } from "./components";
import Login1 from "./components/Login1";
import { Context } from "./context/Context";
import { Sidebar, Navbar1 } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages/index";
function App() {
  const { user, dispatch } = useContext(Context);
  // const history = useHistory();
  // const handleLogout = () => {
  //   dispatch({ type: "LOGOUT" });
  //   history.push("/");
  // };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App_homepage />
        </Route>

        <Route path="/signup">
          <div className="relative z-0 bg-primary1">
            <div className="relative z-0">
              <Signup1 />
              <StarsCanvas />
            </div>
          </div>
        </Route>

        <Route path="/home">
          {user ? (
            <App_campaign />
          ) : (
            <div className="relative z-0 bg-primary1">
              <div className="relative z-0">
                <Login1 />
                <StarsCanvas />
              </div>
            </div>
          )}
        </Route>

        <Route path="/profile">
          {user ? (
            <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
              <div className="sm:flex hidden mr-10 relative">
                <Sidebar />
              </div>
              <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                <Navbar1 />
                <Profile />
              </div>
            </div>
          ) : (
            <div className="relative z-0 bg-primary1">
              <div className="relative z-0">
                <Login1 />
                <StarsCanvas />
              </div>
            </div>
          )}
        </Route>

        <Route path="/create-campaign">
          {user ? (
            <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
              <div className="sm:flex hidden mr-10 relative">
                <Sidebar />
              </div>
              <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                <Navbar1 />
                <CreateCampaign />
              </div>
            </div>
          ) : (
            <div className="relative z-0 bg-primary1">
              <div className="relative z-0">
                <Login1 />
                <StarsCanvas />
              </div>
            </div>
          )}
        </Route>

        <Route path="/campaign-details/:id">
          {user ? (
            <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
              <div className="sm:flex hidden mr-10 relative">
                <Sidebar />
              </div>
              <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                <Navbar1 />
                <CampaignDetails />
              </div>
            </div>
          ) : (
            <div className="relative z-0 bg-primary1">
              <div className="relative z-0">
                <Login1 />
                <StarsCanvas />
              </div>
            </div>
          )}
        </Route>

        <Route path="/login">
          <div className="relative z-0 bg-primary1">
            <div className="relative z-0">
              <Login1 />
              <StarsCanvas />
            </div>
          </div>
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
