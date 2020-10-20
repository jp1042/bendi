import React, { useEffect, useState } from "react";
import Graph from "./components/graph/graph";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import "./style/_resets.scss";
import Nav from "./components/nav/nav";

export type City = {
    '#': string;
    City: string;
    Country: string;
    'AllBuildings': string,
    '100m+': number;
    '150m+': number;
    '200m+': number;
    '300m+': number;
    'TelecomTowers': number;
    'AllStructures': number;
}

const App = () => {
    const [cities, setCities] = useState(null);

    useEffect(() => {
        fetch("/cities")
            .then(response => response.json())
            .then(data => setCities(data))
    }, []);

    return (
        <Router>
            {cities && <Nav cities={cities} />}
            <Switch>
                {cities && Object.keys(cities[0]).map((key, index) =>
                    <Route path={`/${key}`} key={key}>
                        <Graph sortBy={key} cities={cities} />
                    </Route>
                )}
            </Switch>
        </Router>
    );
}

export default App;
