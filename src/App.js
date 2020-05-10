import React, { useEffect, useState } from 'react';
import Client from './contentful'
import './App.css';
import NavBar from './pages/NavBar'
import Main from './pages/Main'
import Projects from './pages/Projects'
import Photos from './pages/Photos'
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Switch } from 'react-router-dom';
const override = css`
  display: block;
  margin: 40vh auto;
`;
function App() {
  let cache = localStorage.getItem("kapilProfile")
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    Client.getEntries({
      content_type: 'kapilPandeyProfile'
    })
      .then((response) => {
        setData(response.items)
        localStorage.setItem("kapilProfile", JSON.stringify(response.items))
        setTimeout(() => setLoader(false), 1000)
      })
      .catch((err) => {
        console.log(err)
        setData(JSON.parse(cache))
        setLoader(false)
      })
  }, [])
  return (
    <div className="App">
      {loader ?
        <HashLoader
          css={override}
          size={150}
          color={"#00ff7F"}
          loading={loader}
        /> :
        <>
          <NavBar data={data} />
          <Switch>
            <Route path="/" component={() => <Main data={data} />} exact />
            <Route path="/Summary" component={() => <Main data={data} />} exact />
            <Route path="/Projects" component={() => <Projects data={data} />} />
            <Route path="/Photos" component={() => <Photos data={data} />} />
          </Switch>
        </>
      }
    </div>
  );
}

export default App;
