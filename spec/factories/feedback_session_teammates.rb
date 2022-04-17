# frozen_string_literal: true

FactoryBot.define do
  factory :feedback_session_teammate do
    feedback_session { FactoryBot.build(:feedback_session) }
    name { Faker::Name.name }
  end
end
