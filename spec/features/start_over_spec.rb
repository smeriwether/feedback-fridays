# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Start over', type: :feature do
  context 'when on the home page' do
    it 'has no start over link' do
      visit('/')
      expect(page).not_to have_selector("[data-attr='start-over-link']")
    end
  end

  context 'when on the lineup page' do
    it 'has a start over link' do
      session = FactoryBot.create(:feedback_session_with_teammates)
      visit new_feedback_lineup_path(session)
      expect(page).to have_selector("[data-attr='start-over-link']")
    end

    it 'returns the user to the home page' do
      session = FactoryBot.create(:feedback_session_with_teammates)
      visit new_feedback_lineup_path(session)
      find("[data-attr='start-over-link']").click

      expect(page).to have_current_path(root_path, ignore_query: true)
    end
  end

  context 'when on the rotation page' do
    it 'has a start over link' do
      lineup = FeedbackLineup.create
      visit feedback_rotation_path(lineup)
      expect(page).to have_selector("[data-attr='start-over-link']")
    end
  end
end
