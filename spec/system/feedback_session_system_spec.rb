# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Feedback Session System', type: :system do
  it 'Can add a third teammate to the feedback session' do
    visit '/'

    find("button[data-attr='new-teammate']").click

    expect(page).to have_selector("input[data-attr='teammate_2']")
  end

  it 'Can add a n teammates to the feedback session' do
    visit '/'

    find("button[data-attr='new-teammate']").click
    find("button[data-attr='new-teammate']").click

    expect(page).to have_selector("input[data-attr='teammate_3']")
  end
end
