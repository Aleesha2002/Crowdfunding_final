import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Sidebar, Navbar1 } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages/index";
const App_campaign = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar1 />
        <BrowserRouter>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/create-campaign">
            <CreateCampaign />
          </Route>
          <Route path="/campaign-details/:id">
            <CampaignDetails />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App_campaign;
