# frozen_string_literal: true

class CreateFeedbackSessionTeammate < ActiveRecord::Migration[7.0]
  def change
    create_table :feedback_session_teammates do |t|
      t.belongs_to :feedback_session
      t.string :name

      t.timestamps
    end
  end
end
