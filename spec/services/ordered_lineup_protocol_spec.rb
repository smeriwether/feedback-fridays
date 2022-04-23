# frozen_string_literal: true

require 'rails_helper'

RSpec.describe OrderedLineupProtocol do
  it 'returns the list of teammates in the same order' do
    teammates = [
      FeedbackSessionTeammate.new(name: 'Example 1'),
      FeedbackSessionTeammate.new(name: 'Example 2'),
      FeedbackSessionTeammate.new(name: 'Example 3')
    ]

    lineup = described_class.new.lineup(teammates)

    expect(lineup).to eq(teammates)
  end

  it 'returns nothing when given nothing' do
    expect(described_class.new.lineup(nil)).to be_nil
  end
end
