function createLineup(teammates) {
  const nextTeammate = (idx) => {
    return (idx + 1) === teammates.length ? teammates[0] : teammates[idx + 1];
  };

  return teammates.map((feedbackGiver, idx) => ({
    giver: feedbackGiver,
    receiver: nextTeammate(idx),
  }));
}

export {
  createLineup,
}
