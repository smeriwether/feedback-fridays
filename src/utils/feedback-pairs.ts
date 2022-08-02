import shuffle from 'shuffle-array'
import { FeedbackPair, newFeedbackPairBuilder } from '../models/FeedbackPair'
import { FeedbackRound } from '../models/FeedbackRotation'
import { Teammate } from '../models/Teammate'

const generateRandomFeedbackPairs = (teammates: Teammate[]): FeedbackPair[] => {
  const randomizedTeammateOrder = shuffle(teammates)
  const nextTeammate = (idx: number) => {
    return idx + 1 === randomizedTeammateOrder.length
      ? randomizedTeammateOrder[0]
      : randomizedTeammateOrder[idx + 1]
  }

  return randomizedTeammateOrder.map((feedbackGiver, idx) =>
    newFeedbackPairBuilder(feedbackGiver, nextTeammate(idx)),
  )
}

const generateFeedbackRounds = (feedbackPairs: FeedbackPair[]): FeedbackRound[] => {
  const sessionsPerRotation = Math.floor(feedbackPairs.length / 2)
  const numberOfRotations = Math.ceil(feedbackPairs.length / sessionsPerRotation)
  const extraSessionAtTheEnd = feedbackPairs.length % 2 !== 0

  let rounds: FeedbackRound[] = []
  for (let i = 0; i < numberOfRotations; i++) {
    let roundN: FeedbackPair[] = []
    if (extraSessionAtTheEnd && i === numberOfRotations - 1) {
      roundN = [feedbackPairs[feedbackPairs.length - 1]]
    } else {
      for (let n = 0; n < sessionsPerRotation; n++) {
        roundN = [...roundN, feedbackPairs[i + n * 2]]
      }
    }
    rounds = [...rounds, { feedbackPairs: roundN }]
  }

  return rounds
}

export { generateRandomFeedbackPairs, generateFeedbackRounds }
