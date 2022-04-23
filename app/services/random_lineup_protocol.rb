# frozen_string_literal: true

class RandomLineupProtocol
  def lineup(teammates)
    (teammates || []).shuffle
  end
end
