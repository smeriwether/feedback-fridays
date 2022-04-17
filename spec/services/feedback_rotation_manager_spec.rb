# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FeedbackRotationManager do
  context 'when there are no groups' do
    it 'returns nothing' do
      rotations = described_class.new([]).rotate
      expect(rotations).to eq([])
    end
  end

  context 'when there are only 2 groups' do
    it 'creates that rotation' do
      group1 = FeedbackLineupGroup.new(feedback_giver: 'Example 1', feedback_receiver: 'Example 2')
      group2 = FeedbackLineupGroup.new(feedback_giver: 'Example 2', feedback_receiver: 'Example 1')

      rotations = described_class.new([group1, group2]).rotate

      expect(rotations).to eq([[group1], [group2]])
    end
  end

  context 'when there are only 3 groups' do
    it 'creates that rotation' do
      group1 = FeedbackLineupGroup.new(feedback_giver: 'Example 1', feedback_receiver: 'Example 2')
      group2 = FeedbackLineupGroup.new(feedback_giver: 'Example 2', feedback_receiver: 'Example 3')
      group3 = FeedbackLineupGroup.new(feedback_giver: 'Example 3', feedback_receiver: 'Example 1')

      rotations = described_class.new([group1, group2, group3]).rotate

      expect(rotations).to eq([[group1], [group2], [group3]])
    end
  end

  context 'when there are 4 groups' do
    it 'creates that rotation' do
      group1 = FeedbackLineupGroup.new(feedback_giver: 'Example 1', feedback_receiver: 'Example 2')
      group2 = FeedbackLineupGroup.new(feedback_giver: 'Example 2', feedback_receiver: 'Example 3')
      group3 = FeedbackLineupGroup.new(feedback_giver: 'Example 3', feedback_receiver: 'Example 4')
      group4 = FeedbackLineupGroup.new(feedback_giver: 'Example 4', feedback_receiver: 'Example 1')

      rotations = described_class.new([group1, group2, group3, group4]).rotate

      expect(rotations).to eq([[group1, group3], [group2, group4]])
    end
  end

  context 'when there are 5 groups' do
    it 'creates that rotation' do
      group1 = FeedbackLineupGroup.new(feedback_giver: 'Example 1', feedback_receiver: 'Example 2')
      group2 = FeedbackLineupGroup.new(feedback_giver: 'Example 2', feedback_receiver: 'Example 3')
      group3 = FeedbackLineupGroup.new(feedback_giver: 'Example 3', feedback_receiver: 'Example 4')
      group4 = FeedbackLineupGroup.new(feedback_giver: 'Example 4', feedback_receiver: 'Example 5')
      group5 = FeedbackLineupGroup.new(feedback_giver: 'Example 5', feedback_receiver: 'Example 1')

      rotations = described_class.new([group1, group2, group3, group4, group5]).rotate

      expect(rotations).to eq([[group1, group3], [group2, group4], [group5]])
    end
  end

  context 'when there are 6 groups' do
    it 'creates that rotation' do
      group1 = FeedbackLineupGroup.new(feedback_giver: 'Example 1', feedback_receiver: 'Example 2')
      group2 = FeedbackLineupGroup.new(feedback_giver: 'Example 2', feedback_receiver: 'Example 3')
      group3 = FeedbackLineupGroup.new(feedback_giver: 'Example 3', feedback_receiver: 'Example 4')
      group4 = FeedbackLineupGroup.new(feedback_giver: 'Example 4', feedback_receiver: 'Example 5')
      group5 = FeedbackLineupGroup.new(feedback_giver: 'Example 5', feedback_receiver: 'Example 6')
      group6 = FeedbackLineupGroup.new(feedback_giver: 'Example 6', feedback_receiver: 'Example 1')

      rotations = described_class.new(
        [group1, group2, group3, group4, group5, group6]
      ).rotate

      expect(rotations).to eq([[group1, group3, group5], [group2, group4, group6]])
    end
  end
end
