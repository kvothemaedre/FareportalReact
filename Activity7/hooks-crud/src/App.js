import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FormCreate from "./components/FormCreate";
import ListAll from "./components/ListAll";
import { Update } from "./components/Update";

function App() {
  const [modify, setModify] = useState(false)
  const [itemID, setItemID] = useState("");
  return (
    <div className="container">
      <h3 className="mt-5">Fundraisers : </h3>
      <br />
      <Accordion>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Start a fundraiser : </Accordion.Header>
        <Accordion.Body className="bg-dark bg-gradient text-white">
          <FormCreate />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Update a fundraiser :</Accordion.Header>
        <Accordion.Body>
        <Update  modify = {modify} setModify = {setModify} itemID = {itemID}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>See all fundraisers :</Accordion.Header>
        <Accordion.Body>
          <ListAll setModify = {setModify} setItemID = {setItemID} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default App;
