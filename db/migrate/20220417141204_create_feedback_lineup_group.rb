# frozen_string_literal: true

class CreateFeedbackLineupGroup < ActiveRecord::Migration[7.0]
  def change
    create_table :feedback_lineup_groups do |t|
      t.belongs_to :feedback_lineup

      t.string :feedback_giver
      t.string :feedback_receiver

      t.timestamps
    end
  end
end
