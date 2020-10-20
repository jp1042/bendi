import React from "react"
import { JsonToTable } from "react-json-to-table";

import "./graph.scss";

const Graph = ({ sortBy, cities }) => {
    // sort doesn't work for alphabetical at the moment - could be done at api level
    const sortedCities = cities.sort((a, b) => b[sortBy] - a[sortBy]);

    const displayTable = () => {
        // Would prefer a different libary given more time or a custom one
        // @ts-ignore
        return (<div className="graph"><JsonToTable json={sortedCities} /></div>)
    }

    return (displayTable());
}

export default Graph;