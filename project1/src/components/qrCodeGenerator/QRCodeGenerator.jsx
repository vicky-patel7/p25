import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState("");
  const [qrValue, setQrValue] = useState("");
  function handleSubmit(textString) {
    setQrValue(textString);
    setQrText("");
  }
  return (
    <div className="container d-flex flex-column text-center mt-3">
        <h3>QR Code Generator</h3>
        <form className="form-group d-flex justify-content-center">
            <input className="form-control w-75" name="qr-text" type="text" value={qrText} placeholder="Enter Text Here" onChange={(e) => setQrText(e.target.value)}/>
            {
              qrText ? <button className="btn btn-primary m-2" type="submit" onClick={() => handleSubmit(qrText)}>Generate</button>
              : <button disabled className="btn btn-primary m-2" type="submit">Generate</button>
            }
        </form>
        <div>
          {
            qrValue && <QRCode value={qrValue} id="qr-code-value"/>
          }
        </div>
    </div>
  )
}

export default QRCodeGenerator;
