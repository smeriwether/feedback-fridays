# frozen_string_literal: true

class FeedbackSessionsController < ApplicationController
  def create
    FeedbackSession.create(feedback_session_params)
  end

  private

  def feedback_session_params
    params.require(:feedback_session).permit(feedback_session_teammates_attributes: [:name])
  end
end
