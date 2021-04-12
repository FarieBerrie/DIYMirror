import { React } from "react";
import { JsonToTable } from "react-json-to-table"

export const Table = () => {
    const data = require("../../../src/Weather.json")
    return(
    <div className="data">
        <h1 style={{ fontSize: "12px", fontFamily:"Times New Roman", marginLeft:"1%" }}>*Values Taken at 6am</h1>
        <JsonToTable json={data} />
    </div>

    )
}