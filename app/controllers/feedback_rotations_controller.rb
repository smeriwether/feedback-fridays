# frozen_string_literal: true

class FeedbackRotationsController < ApplicationController
  def show
    @feedback_lineup = FeedbackLineup.find(params[:feedback_lineup_id])
    @feedback_rotations = FeedbackRotationManager.new(@feedback_lineup.feedback_lineup_groups).rotate
  end
end
