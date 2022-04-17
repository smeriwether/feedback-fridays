# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FeedbackLineup do
  it 'can write its feedback lineup groups' do
    feedback_lineup = described_class.create(
      {
        feedback_lineup_groups_attributes: [
          { feedback_giver: 'Example 1', feedback_receiver: 'Example 2' },
          { feedback_giver: 'Example 2', feedback_receiver: 'Example 1' }
        ]
      }
    )

    expect(feedback_lineup.feedback_lineup_groups_count).to eq(2)
  end

  it 'can write the attributes of its feedback session teammates' do
    feedback_lineup = described_class.create(
      {
        feedback_lineup_groups_attributes: [
          { feedback_giver: 'Example 1', feedback_receiver: 'Example 2' }
        ]
      }
    )

    feedback_group = feedback_lineup.feedback_lineup_groups.first
    expect(feedback_group.feedback_giver).to eq('Example 1')
    expect(feedback_group.feedback_receiver).to eq('Example 2')
  end
end
