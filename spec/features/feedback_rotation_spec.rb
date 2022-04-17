# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigates to the Feedback Rotation page', type: :feature do
  it 'can see the feedback rotation from the lineup screen' do
    feedback_lineup = FeedbackLineup.create
    visit "/feedback_rotations/#{feedback_lineup.id}"

    expect(page).to have_selector("[data-attr='feedback-rotations']")
  end

  it 'creates the most efficient feedback rotations' do
    feedback_lineup = FeedbackLineup.create(
      {
        feedback_lineup_groups_attributes: [
          { feedback_giver: 'Example 1', feedback_receiver: 'Example 2' },
          { feedback_giver: 'Example 2', feedback_receiver: 'Example 3' },
          { feedback_giver: 'Example 3', feedback_receiver: 'Example 4' },
          { feedback_giver: 'Example 4', feedback_receiver: 'Example 1' }
        ]
      }
    )
    visit "/feedback_rotations/#{feedback_lineup.id}"

    expect(page.all("[data-attr='feedback-rotations-0-giver']").map(&:text)).to eq(['Example 1', 'Example 3'])
    expect(page.all("[data-attr='feedback-rotations-0-receiver']").map(&:text)).to eq(['Example 2', 'Example 4'])
    expect(page.all("[data-attr='feedback-rotations-1-giver']").map(&:text)).to eq(['Example 2', 'Example 4'])
    expect(page.all("[data-attr='feedback-rotations-1-receiver']").map(&:text)).to eq(['Example 3', 'Example 1'])
  end

  # rubocop:disable RSpec/MultipleExpectations
  it 'creates the most efficient feedback rotations even when there are odd number of groups' do
    feedback_lineup = FeedbackLineup.create(
      {
        feedback_lineup_groups_attributes: [
          { feedback_giver: 'Example 1', feedback_receiver: 'Example 2' },
          { feedback_giver: 'Example 2', feedback_receiver: 'Example 3' },
          { feedback_giver: 'Example 3', feedback_receiver: 'Example 1' }
        ]
      }
    )
    visit "/feedback_rotations/#{feedback_lineup.id}"

    expect(page.all("[data-attr='feedback-rotations-0-giver']").map(&:text)).to eq(['Example 1'])
    expect(page.all("[data-attr='feedback-rotations-0-receiver']").map(&:text)).to eq(['Example 2'])
    expect(page.all("[data-attr='feedback-rotations-1-giver']").map(&:text)).to eq(['Example 2'])
    expect(page.all("[data-attr='feedback-rotations-1-receiver']").map(&:text)).to eq(['Example 3'])
    expect(page.all("[data-attr='feedback-rotations-2-giver']").map(&:text)).to eq(['Example 3'])
    expect(page.all("[data-attr='feedback-rotations-2-receiver']").map(&:text)).to eq(['Example 1'])
  end
  # rubocop:enable RSpec/MultipleExpectations
end
