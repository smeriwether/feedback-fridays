# frozen_string_literal: true

class FeedbackSession < ApplicationRecord
  has_many :feedback_session_teammates, dependent: :destroy

  accepts_nested_attributes_for :feedback_session_teammates

  delegate :count, to: :feedback_session_teammates, prefix: true

  validates :feedback_session_teammates, length: { minimum: 2 }
end
