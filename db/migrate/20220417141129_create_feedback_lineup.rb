# frozen_string_literal: true

class CreateFeedbackLineup < ActiveRecord::Migration[7.0]
  def change
    create_table :feedback_lineups, &:timestamps
  end
end
