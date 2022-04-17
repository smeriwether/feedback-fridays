# frozen_string_literal: true

FactoryBot.define do
  factory :feedback_session do
    factory :feedback_session_with_teammates do
      transient do
        teammates_count { 2 }
      end

      feedback_session_teammates do
        Array.new(teammates_count) { association(:feedback_session_teammate) }
      end
    end
  end
end
