import React from "react";
import "./App.css";
import Profile from "./pages/auth/Profile";
import Protected from "./pages/auth/Protected";
import PrimaryButton from "./pages/ExtractComponentsTypes/PrimaryButton";
import {CustomButton, CustomButtonWithTextAsChildren} from "./pages/InheritHtmlElementProps/CustomButton";
import RandomNumber from "./pages/RestrictProps/RandomNumber";
import Toast from "./pages/template_literals/Toast";
import Toast2, { Directions } from "./pages/template_literals/Toast2";

function App() {
  return (
    <div className="App">
      <div>
        <Toast position="center" />
        <br />
        <Toast2 style={{background: 'red'}} position={Directions.bottomCenter} />
        <CustomButton variant="primary">
          <strong>Button that supports element component</strong>
        </CustomButton>
        <br />
        <CustomButtonWithTextAsChildren variant="secondary">
          Secondary button
        </CustomButtonWithTextAsChildren>
        <br />
        <PrimaryButton variant="primary">
          <strong>This is primary button</strong>
        </PrimaryButton>
      </div>
    </div>
  );
}

export default App;
