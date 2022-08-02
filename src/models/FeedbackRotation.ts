import { FeedbackPair } from './FeedbackPair'

export interface FeedbackRound {
  feedbackPairs: FeedbackPair[]
}

export const newFeedbackRound = (feedbackPairs: FeedbackPair[]): FeedbackRound => ({
  feedbackPairs,
})
