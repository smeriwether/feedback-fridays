# frozen_string_literal: true

class FeedbackLineupsController < ApplicationController
  def new
    feedback_session = FeedbackSession.find(params[:feedback_session_id])
    feedback_lineup_groups = ::FeedbackLineupManager.new(feedback_session.feedback_session_teammates).group

    @feedback_lineup = FeedbackLineup.new
    feedback_lineup_groups.each do |group|
      @feedback_lineup.feedback_lineup_groups.build(
        feedback_giver: group[:giver],
        feedback_receiver: group[:receiver]
      )
    end
  end
end
