# frozen_string_literal: true

Rails.application.routes.draw do
  resources :feedback_sessions

  root 'home#index'
end
