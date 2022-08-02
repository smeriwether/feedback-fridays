import { newFeedbackPairBuilder } from '../models/FeedbackPair'
import { newTeammateBuilder } from '../models/Teammate'
import {
  encodeTeammates,
  decodeTeammates,
  encodeFeedbackPairs,
  decodeFeedbackPairs,
} from './encoding'

describe('encoding', () => {
  describe('teammate encoding', () => {
    it('should put out what is put in', () => {
      const teammates = [
        newTeammateBuilder('Name 1'),
        newTeammateBuilder('Name 2'),
        newTeammateBuilder('Name 3'),
      ]

      const token = encodeTeammates(teammates)

      const decodedTeammates = decodeTeammates(token)

      expect(teammates.map((t) => t.name)).toEqual(decodedTeammates.map((t) => t.name))
    })
  })

  describe('feedback pairs encoding', () => {
    it('should put out what is put in', () => {
      const pairs = [
        newFeedbackPairBuilder(newTeammateBuilder('Teammate 1'), newTeammateBuilder('Teammate 2')),
        newFeedbackPairBuilder(newTeammateBuilder('Teammate 2'), newTeammateBuilder('Teammate 1')),
      ]

      const token = encodeFeedbackPairs(pairs)

      const decodedPairs = decodeFeedbackPairs(token)

      pairs.map((p, idx) => {
        expect(p.giver.name).toEqual(decodedPairs[idx].giver.name)
        expect(p.receiver.name).toEqual(decodedPairs[idx].receiver.name)
      })
    })
  })
})
