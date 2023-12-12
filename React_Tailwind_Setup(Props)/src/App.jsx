/** @format */

import MessageComponents from "./Components/MessageComponents";
import Bidhan from "../src/assets/images/MY_IMAGE.png";
import Kabba from "../src/assets/images/Kabba.png";

function App({ myImage }) {
  return (
    <>
      <div className="container w-full">
        <MessageComponents
          username={"Bidhan Deb Nath"}
          job_taitle={"Web Developer"}
          button_name={"Contuct me"}
          myImage={Bidhan}
        />
        <MessageComponents
          username={"Kabba Paul"}
          job_taitle={"Oracle Developer"}
          button_name={"Message me"}
          myImage={Kabba}
        />
      </div>
    </>
  );
}

export default App;
