const PlayCounts = ({ playCounts }) => {
  // Convert object to array and sort by play count (descending)
  const sortedCounts = Object.entries(playCounts).sort((a, b) => b[1] - a[1]);

  // Total plays (optional, if you still want to show it)
  const totalPlays = sortedCounts.reduce((sum, [, count]) => sum + count, 0);

  return (
    <div>
      <h3>Play Counts</h3>
      <ul className="play-count-list">
        {sortedCounts.map(([title, count]) => (
          <li key={title}>
            <strong>{title}</strong>: {count} plays
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Plays:</strong> {totalPlays}
      </p>
    </div>
  );
};

export default PlayCounts;
