Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :albums
  resources :articles
  resources :groups
  resources :images
  root 'home#index'
end
