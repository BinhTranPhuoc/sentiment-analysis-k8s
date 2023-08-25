import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import {
  MDBInput,
  MDBCard,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import Polarity from "./compoments/Polarity";

const style = {
  marginLeft: 12,
  width: '30%'
};

function App() {
  const [value, setValue] = useState<string>("");
  const [sentence, setSentence] = useState("");
  const [polarity, setPolarity] = useState(undefined);

  const analyzeSentence = () => {
    axios
      .post(`http://localhost:62971/sentiment`, { value })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSentence(res.data.sentence);
        setPolarity(res.data.polarity);
      })
      .catch((error) => console.log(error));
  };

  return (
    <MDBCard className="centerize">
      <MDBCardBody>
        <MDBCardTitle className="title">Sentiment Analyser</MDBCardTitle>
        <MDBCardText style={{ display: "flex", flexDirection: "row" }}>
          <MDBInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Type your sentence."
            type="text"
          />
          <MDBBtn style={style} onClick={() => analyzeSentence()}>
            Send
          </MDBBtn>
        </MDBCardText>
        { polarity && <Polarity sentence={sentence} polarity={polarity} /> }
      </MDBCardBody>
    </MDBCard>
  );
}

export default App;
