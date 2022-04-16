# frozen_string_literal: true

Rails.application.routes.draw do
  resources :feedback_lineups, param: :feedback_session_id

  resources :feedback_sessions

  root 'feedback_sessions#new'
end
