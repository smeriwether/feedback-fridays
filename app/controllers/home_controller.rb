# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @feedback_session = FeedbackSession.new
    @feedback_session.feedback_session_teammates.build
    @feedback_session.feedback_session_teammates.build
  end
end
