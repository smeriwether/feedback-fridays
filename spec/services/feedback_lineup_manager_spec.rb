# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FeedbackLineupManager do
  it 'groups the teammates into groups of 2 according to the protocol' do
    teammates = [
      FeedbackSessionTeammate.new(name: 'Example 1'),
      FeedbackSessionTeammate.new(name: 'Example 2'),
      FeedbackSessionTeammate.new(name: 'Example 3')
    ]

    feedback_groups = described_class.new(teammates).group

    expect(feedback_groups).to eq(
      [
        { giver: 'Example 1', receiver: 'Example 2' },
        { giver: 'Example 2', receiver: 'Example 3' },
        { giver: 'Example 3', receiver: 'Example 1' }
      ]
    )
  end

  it 'can calls the protocol that is sent in' do
    protocol = OrderedLineupProtocol.new
    allow(protocol).to receive(:lineup).and_return([])
    teammates = [
      FeedbackSessionTeammate.new(name: 'Example 1'),
      FeedbackSessionTeammate.new(name: 'Example 2'),
      FeedbackSessionTeammate.new(name: 'Example 3')
    ]

    described_class.new(teammates, protocol).group

    expect(protocol).to have_received(:lineup)
  end
end
