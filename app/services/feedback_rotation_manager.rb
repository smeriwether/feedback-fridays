# frozen_string_literal: true

class FeedbackRotationManager
  attr_accessor :feedback_lineup_groups

  def initialize(feedback_lineup_groups)
    self.feedback_lineup_groups = feedback_lineup_groups
  end

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def rotate
    return [] if @feedback_lineup_groups.length.zero?

    sessions_per_rotation = (@feedback_lineup_groups.length / 2).floor
    number_of_rotations = (@feedback_lineup_groups.length / sessions_per_rotation).ceil
    extra_session_at_the_end = number_of_rotations != @feedback_lineup_groups.length &&
                               @feedback_lineup_groups.length.odd?

    number_of_cycles = extra_session_at_the_end ? number_of_rotations + 1 : number_of_rotations

    rotations = []
    number_of_cycles.times do |idx|
      next if idx > number_of_rotations

      rotation_n = []
      if extra_session_at_the_end && idx == number_of_rotations
        rotation_n = [@feedback_lineup_groups[@feedback_lineup_groups.length - 1]]
      else
        sessions_per_rotation.times do |n|
          rotation_n << @feedback_lineup_groups[(idx + (n * 2))]
        end
      end

      rotations << rotation_n
    end

    rotations
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength
end
