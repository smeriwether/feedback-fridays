# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigates to the Feedback Lineup page', type: :feature do
  it 'can see the feedback lineup screen' do
    feedback_session = FactoryBot.create(:feedback_session_with_teammates)
    visit "/feedback_lineups/new/#{feedback_session.id}"

    expect(page).to have_selector("[data-attr='feedback-lineup']")
  end

  it 'can see each member of the feedback session' do
    feedback_session = FeedbackSession.create(
      {
        feedback_session_teammates_attributes: [
          { name: 'Example 1' },
          { name: 'Example 2' }
        ]
      }
    )
    visit "/feedback_lineups/new/#{feedback_session.id}"

    expect(page).to have_text('Example 1')
    expect(page).to have_text('Example 2')
  end

  it 'can see each feedback group' do
    feedback_session = FeedbackSession.create(
      {
        feedback_session_teammates_attributes: [
          { name: 'Example 1' },
          { name: 'Example 2' },
          { name: 'Example 3' }
        ]
      }
    )
    visit "/feedback_lineups/new/#{feedback_session.id}"

    expect(page.all("[data-attr='feedback-group-feedback-giver']").count).to eq(3)
    expect(page.all("[data-attr='feedback-group-feedback-receiver']").count).to eq(3)
  end

  it 'can verify a feedback lineup' do
    feedback_session = FactoryBot.create(:feedback_session_with_teammates)
    visit "/feedback_lineups/new/#{feedback_session.id}"

    find("[data-attr='verify-feedback-lineup']").click

    expect(FeedbackLineup.count).to eq(1)
  end

  it 'navigates to the feedback rotation screen after verifying the feedback lineup' do
    feedback_session = FactoryBot.create(:feedback_session_with_teammates)
    visit "/feedback_lineups/new/#{feedback_session.id}"

    find("[data-attr='verify-feedback-lineup']").click

    expect(page).to have_current_path(feedback_rotation_path(FeedbackLineup.last), ignore_query: true)
  end

  it 'can click a refresh button to refresh the page to load a new lineup' do
    feedback_session = FactoryBot.create(:feedback_session_with_teammates)
    visit "/feedback_lineups/new/#{feedback_session.id}"

    expect(page).to have_selector("[data-attr='refresh']")
  end
end
