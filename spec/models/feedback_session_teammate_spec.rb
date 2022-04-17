# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FeedbackSessionTeammate do
  it 'needs a name' do
    expect(described_class.new(name: nil)).not_to be_valid
  end
end
