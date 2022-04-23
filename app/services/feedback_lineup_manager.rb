# frozen_string_literal: true

class FeedbackLineupManager
  attr_accessor :teammates, :lineup_protocol

  def initialize(teammates, lineup_protocol = RandomLineupProtocol.new)
    self.teammates = teammates
    self.lineup_protocol = lineup_protocol
  end

  def group
    lineup.map.with_index do |teammate, index|
      next_up_index = lineup.length <= index + 1 ? 0 : index + 1
      {
        giver: teammate.name,
        receiver: lineup[next_up_index].name
      }
    end
  end

  private

  def lineup
    @lineup ||= lineup_protocol.lineup(teammates)
  end
end
