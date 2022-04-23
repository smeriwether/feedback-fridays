# frozen_string_literal: true

require 'rails_helper'

RSpec.describe RandomLineupProtocol do
  it 'returns a random order of teammates as the lineup' do
    teammates = [
      FeedbackSessionTeammate.new(name: 'Example 1'),
      FeedbackSessionTeammate.new(name: 'Example 2'),
      FeedbackSessionTeammate.new(name: 'Example 3')
    ]

    lineup = described_class.new.lineup(teammates)

    expect(lineup).not_to eq(teammates)
  end

  it 'returns nothing when given nothing' do
    expect(described_class.new.lineup(nil)).to be_empty
  end
end
