import { useState } from "react";
import {
  SongsData,
  copyright,
  initialPlayCounts,
  playListTitle,
} from "./components/Data";

import Heading from "./components/Heading";
import Balance from "./components/Balance";
import SongList from "./components/SongList";
import PlayCounts from "./components/PlayCounts";
import Footer from "./components/Footer";

const App = () => {
  // Track which song is currently playing
  const [currentlyPlaying, setCurrentlyPlaying] = useState(0);

  // Starting balance (user can add £1 each time)
  const [balance, setBalance] = useState(0);

  // Track play counts (per song title)
  const [playCounts, setPlayCounts] = useState(initialPlayCounts);

  return (
    <div className="App">
      <Heading title={playListTitle} />

      {/* 💷 Insert money */}
      <Balance balance={balance} setBalance={setBalance} />

      {/*  Song list with preview & interactivity */}
      <SongList
        songs={SongsData}
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        playCounts={playCounts}
        setPlayCounts={setPlayCounts}
        balance={balance}
        setBalance={setBalance}
      />

      {/* Show play count list sorted by most played */}
      <PlayCounts playCounts={playCounts} />
      <Footer copyright={copyright} />
    </div>
  );
};

export default App;
