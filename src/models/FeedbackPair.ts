import { Teammate } from './Teammate'

export interface FeedbackPair {
  receiver: Teammate
  giver: Teammate
}

export const newFeedbackPairBuilder = (giver: Teammate, receiver: Teammate): FeedbackPair => ({
  giver,
  receiver,
})
