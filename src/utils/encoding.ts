import { FeedbackPair, newFeedbackPairBuilder } from '../models/FeedbackPair'
import { newTeammateBuilder, Teammate } from '../models/Teammate'

const encodeTeammates = (teammates: Teammate[]): string => {
  // For now the name is the only field that we care about so all other fields are dropped.
  const nameOnlyTeammates = teammates.map((t) => ({ name: t.name }))
  return encodeURIComponent(btoa(JSON.stringify(nameOnlyTeammates)))
}

const decodeTeammates = (token: string | undefined): Teammate[] => {
  if (!token) return []
  const nameOnlyTeammate = JSON.parse(atob(decodeURIComponent(token)))
  return nameOnlyTeammate.map((teammate: { name: string }) => newTeammateBuilder(teammate.name))
}

const encodeFeedbackPairs = (feedbackPairs: FeedbackPair[]): string => {
  // For now the name is the only field that we care about so all other fields are dropped.
  const nameOnlyPairs = feedbackPairs.map((p) => ({
    giverName: p.giver.name,
    receiverName: p.receiver.name,
  }))
  return encodeURIComponent(btoa(JSON.stringify(nameOnlyPairs)))
}

const decodeFeedbackPairs = (token: string | undefined): FeedbackPair[] => {
  if (!token) return []
  const nameOnlyPairs = JSON.parse(atob(decodeURIComponent(token)))
  return nameOnlyPairs.map((pair: { giverName: string; receiverName: string }) =>
    newFeedbackPairBuilder(
      newTeammateBuilder(pair.giverName),
      newTeammateBuilder(pair.receiverName),
    ),
  )
}

export { encodeTeammates, decodeTeammates, encodeFeedbackPairs, decodeFeedbackPairs }
