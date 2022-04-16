# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigates to the Feedback Lineup page', type: :feature do
  it 'can see the feedback lineupscreen' do
    feedback_session = FeedbackSession.create
    visit "/feedback_lineups/#{feedback_session.id}"

    expect(page).to have_selector("[data-attr='feedback-lineup']")
  end
end
