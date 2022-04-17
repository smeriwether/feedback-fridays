# frozen_string_literal: true

class FeedbackLineupManager
  attr_accessor :teammates

  def initialize(teammates)
    self.teammates = teammates
  end

  def group
    teammates.map.with_index do |teammate, index|
      next_up_index = teammates.length <= index + 1 ? 0 : index + 1
      {
        giver: teammate.name,
        receiver: teammates[next_up_index].name
      }
    end
  end
end
