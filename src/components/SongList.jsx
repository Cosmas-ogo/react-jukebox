const SongList = ({
  songs,
  currentlyPlaying,
  setCurrentlyPlaying,
  playCounts,
  setPlayCounts,
  balance,
  setBalance,
}) => {
  // Play the next song
  const handleNext = () => {
    if (balance <= 0) return; // Stop if no balance

    setCurrentlyPlaying((prevIndex) => {
      const nextIndex = (prevIndex + 1) % songs.length;
      const nextTitle = songs[nextIndex].title;

      // Update play count
      setPlayCounts((prev) => ({
        ...prev,
        [nextTitle]: (prev[nextTitle] || 0) + 1,
      }));

      // Deduct £1
      setBalance((prev) => prev - 1);

      return nextIndex;
    });
  };

  // Click on a song to play it
  const handleSelectSong = (index) => {
    if (balance <= 0) return;

    const selectedSong = songs[index];
    setCurrentlyPlaying(index);

    setPlayCounts((prev) => ({
      ...prev,
      [selectedSong.title]: (prev[selectedSong.title] || 0) + 1,
    }));

    setBalance((prev) => prev - 1);
  };

  return (
    <>
      <ol className="song-list">
        {songs.map((song, index) => (
          <li
            key={song.id}
            className={`song-item ${
              index === currentlyPlaying ? "song-current" : ""
            }`}
            onClick={() => handleSelectSong(index)}
          >
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
            <img
              src={song.albumCover}
              alt={`Album cover for ${song.title}`}
              className="song-img"
            />

            {index === currentlyPlaying && (
              <iframe
                src={song.previewURL}
                className="preview-frame"
                title={`Preview of ${song.title}`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            )}
          </li>
        ))}
      </ol>
      {balance <= 0 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Please insert £1 to play a song.
        </p>
      )}

      <button onClick={handleNext} disabled={balance <= 0}>
        Next Song
      </button>
    </>
  );
};

export default SongList;
