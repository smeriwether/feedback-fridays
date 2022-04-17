# frozen_string_literal: true

class FeedbackSessionTeammate < ApplicationRecord
  belongs_to :feedback_session

  validates :name, presence: true
end
