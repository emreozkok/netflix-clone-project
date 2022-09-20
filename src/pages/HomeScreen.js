import React from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
      <Row
        title="NETFLİX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Doocumantaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default HomeScreen;
