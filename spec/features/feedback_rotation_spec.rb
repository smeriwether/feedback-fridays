# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigates to the Feedback Rotation page', type: :feature do
  it 'can see the feedback rotation from the lineup screen' do
    feedback_lineup = FeedbackLineup.create
    visit "/feedback_rotations/#{feedback_lineup.id}"

    expect(page).to have_selector("[data-attr='feedback-rotations']")
  end
end
