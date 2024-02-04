/** @format */

import MessageComponents from "./Components/MessageComponents";
import Bidhan from "../src/assets/images/MY_IMAGE.png";
import Urmi from "../src/assets/images/urmi.jpg";

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
          username={"Urmi Datta (Paku)"}
          job_taitle={"Java Developer"}
          button_name={"Message me"}
          myImage={Urmi}
        />
      </div>
    </>
  );
}

export default App;
