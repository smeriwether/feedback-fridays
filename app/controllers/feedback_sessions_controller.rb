# frozen_string_literal: true

class FeedbackSessionsController < ApplicationController
  def new
    @feedback_session = FeedbackSession.new
    @feedback_session.feedback_session_teammates.build
    @feedback_session.feedback_session_teammates.build
  end

  def create
    feedback_session = FeedbackSession.create(feedback_session_params)
    redirect_to feedback_lineup_path(feedback_session)
  end

  private

  def feedback_session_params
    params.require(:feedback_session).permit(feedback_session_teammates_attributes: [:name])
  end
end
