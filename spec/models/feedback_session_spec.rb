# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FeedbackSession do
  it 'can write its feedback session teammates' do
    feedback_session = described_class.create(
      {
        feedback_session_teammates_attributes: [
          { name: 'Example 1' },
          { name: 'Example 2' }
        ]
      }
    )

    expect(feedback_session.feedback_session_teammates_count).to eq(2)
  end

  it 'can write the attributes of its feedback session teammates' do
    feedback_session = described_class.create(
      {
        feedback_session_teammates_attributes: [
          { name: 'Example 1' }
        ]
      }
    )

    teammate = feedback_session.feedback_session_teammates.first
    expect(teammate.name).to eq('Example 1')
  end
end
