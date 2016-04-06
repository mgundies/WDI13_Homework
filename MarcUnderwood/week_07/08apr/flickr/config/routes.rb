Rails.application.routes.draw do
  get 'pages/search'

  root :to => 'pages#search'
end
