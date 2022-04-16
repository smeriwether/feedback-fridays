# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Navigates to the Home page', type: :feature do
  it 'Sees feedback friday application title' do
    visit '/'

    expect(page).to have_selector("[data-attr='title']")
  end

  it 'Can add one teammate to the feedback session' do
    visit '/'

    expect(page).to have_selector("input[data-attr='teammate_1']")
  end

  it 'Can add a second teammate to the feedback session' do
    visit '/'

    expect(page).to have_selector("input[data-attr='teammate_2']")
  end
end
