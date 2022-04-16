# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigates to the Home page', type: :feature do
  it 'sees feedback friday application title' do
    visit '/'

    expect(page).to have_selector("[data-attr='title']")
  end

  it 'can add one teammate to the feedback session' do
    visit '/'

    expect(page).to have_selector("input[data-attr='teammate_0']")
  end

  it 'can add a second teammate to the feedback session' do
    visit '/'

    expect(page).to have_selector("input[data-attr='teammate_1']")
  end

  it 'can create a feedback session' do
    visit '/'

    page.find("[data-attr='teammate_0']").fill_in with: 'Stephen M'
    page.find("[data-attr='teammate_1']").fill_in with: 'Foo B'

    find("[type='submit']").click

    expect(FeedbackSession.last).not_to be_nil
  end

  it 'redirects to verify the feedback session after creating it' do
    visit '/'

    page.find("[data-attr='teammate_0']").fill_in with: 'Stephen M'
    page.find("[data-attr='teammate_1']").fill_in with: 'Foo B'

    find("[type='submit']").click

    expect(page).to have_current_path(feedback_lineup_path(FeedbackSession.last), ignore_query: true)
  end
end
