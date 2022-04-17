# frozen_string_literal: true

Rails.application.routes.draw do
  resources :feedback_rotations, param: :feedback_lineup_id

  resources :feedback_lineups, path_names: { new: 'new/:feedback_session_id' }

  resources :feedback_sessions

  root 'feedback_sessions#new'
end
