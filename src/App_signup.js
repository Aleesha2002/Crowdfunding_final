import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Signup1, StarsCanvas, Login1 } from "./components";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <div className="relative z-0 bg-primary1">
            <div className="relative z-0">
              <Signup1 />
              <StarsCanvas />
            </div>
          </div>
        </Route>

        <Route path="/login">
          <div className="relative z-0 bg-primary1">
            <div className="relative z-0">
              <Login1 />
              <StarsCanvas />
            </div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
