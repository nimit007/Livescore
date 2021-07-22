import "./App.css";
import { Grid } from "@material-ui/core";
import Navbar from "./components/navbar";
import MyCard from "./components/cards";
import { getMatches } from "./api/Api";
import { Fragment, useEffect, useState } from "react";
import React from "react";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        // console.log(data)
      })
      .catch((error) => alert("could not load data"));
  }, []);

  return (
    <div
      className="App"
      style={{
        background: "linear-gradient(to right, #787A91, #EEEEEE)",
        marginTop: "0",
      }}
    >
      <Navbar />
      <div>
        <h1>Welcome to my Live Score App</h1>
      </div>

      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match) => (
            <Fragment key={match.unique_id}>
              {match.type === "" || match.type === "Twenty20" ? (
                <MyCard key={match.unique_id} match={match} />
              ) : (
                ""
              )}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
