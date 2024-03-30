import { useState} from "react"
const RandomColor = () => {
    const [color, setColor] = useState("#000000");
    const [typeOfColor, setTypeOfColor] = useState("hex")

    function utilityFunction(maxAllowedSize) {
        return Math.floor(Math.random() * maxAllowedSize);
    }

    function handleRandomColorGeneration() {
        if (typeOfColor === 'hex') {
            let hexColor = "#";
            let hexPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            for (let i = 0; i < 6; i++) {
                hexColor += hexPossible[utilityFunction(hexPossible.length)];
            }
            setColor(hexColor);
        } else {
            let r = utilityFunction(255);
            let g = utilityFunction(255);
            let b = utilityFunction(255);
            let rgbColor = `rgb(${r}, ${g}, ${b})`;
            setColor(rgbColor);
        }
    }

    return (
        <div className="container" style={{
            backgroundColor: color,
            height : '250px',
            with: '100wh'
        }}>
            <div className="buttons text-center mt-3 p-3">
                <button className="btn btn-primary medium mx-3" onClick={() => setTypeOfColor("rgb")}>{typeOfColor === "rgb" ? "RGB Selected" : "Create RGB"}</button>
                <button className="btn btn-primary medium mx-3" onClick={() => setTypeOfColor("hex")}>{typeOfColor === "hex" ? "HEX Selected" : "Create HEX"}</button>
                <button className="btn btn-primary medium mx-3" onClick={() => handleRandomColorGeneration()}>Generate Color</button>
            </div>
            <div className = "text-center">
                <h4 style = {{
                    color : 'white',
                    marginTop : "12px",
                }}>
                    {
                        typeOfColor === 'hex' ? "HEX Color" : "RGB Color"
                    }
                    <br />
                    {
                        color
                    }
                </h4>
            </div>
        </div>
    )
}

export default RandomColor
