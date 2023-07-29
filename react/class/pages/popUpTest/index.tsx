import React, { FC } from "react";
import OauthPopup from "./oauth"

const onCode = async () => {
  try {
    const res = await Promise.resolve(true);
  } catch (e) {
    console.error(e);
  } finally {
    window.localStorage.removeItem("code"); //remove code from localStorage
  }
};
const App: FC = () => (
  <OauthPopup
    url="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-977ad9bafe3e3762a97d57c6c4914aad67cf3bed866e1a332bb95d6991843033&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F42apitest&response_type=code"
    onCode={onCode}
    onClose={() => console.log("closed")}
    title="Auth">
        
    <button type="button">Enter</button>
  </OauthPopup>
);

export default App;
