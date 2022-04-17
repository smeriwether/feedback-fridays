# frozen_string_literal: true

class FeedbackLineup < ApplicationRecord
  has_many :feedback_lineup_groups, dependent: :destroy

  accepts_nested_attributes_for :feedback_lineup_groups

  delegate :count, to: :feedback_lineup_groups, prefix: true
end
