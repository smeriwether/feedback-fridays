# frozen_string_literal: true

require 'rails_helper'

RSpec.feature 'Navigates to the Home page', type: :feature do
  scenario 'Sees feedback friday application title' do
    visit '/'

    expect(page).to have_selector("[data-attr='title']")
  end

  scenario 'Can add two teammates to the feedback session' do
    visit '/'

    expect(page).to have_selector("input[data-attr='teammate_1']")
    expect(page).to have_selector("input[data-attr='teammate_2']")
  end
end
