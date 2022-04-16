# frozen_string_literal: true

class CreateFeedbackSession < ActiveRecord::Migration[7.0]
  def change
    create_table :feedback_sessions, &:timestamps
  end
end
