# frozen_string_literal: true

class FeedbackSessionsController < ApplicationController
  def new
    @feedback_session = FeedbackSession.new
    @feedback_session.feedback_session_teammates.build
    @feedback_session.feedback_session_teammates.build
  end

  def create
    feedback_session = FeedbackSession.create(feedback_session_params)
    if feedback_session.valid?
      redirect_to new_feedback_lineup_path(feedback_session)
    else
      flash[:errors] = feedback_session.errors.full_messages
      redirect_to new_feedback_session_path
    end
  end

  private

  def feedback_session_params
    params.require(:feedback_session).permit(feedback_session_teammates_attributes: [:name])
  end
end
