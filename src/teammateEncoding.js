function encodeTeammates(teammates) {
  return encodeURIComponent(btoa(JSON.stringify(teammates)))
}

function decodeTeammates(token) {
  return JSON.parse(atob(decodeURIComponent(token)));
}

export {
  encodeTeammates,
  decodeTeammates,
}
