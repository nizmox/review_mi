ReviewMi::Application.routes.draw do

  root 'home#index'

  resources :reviews, :only => [:index, :show, :create]
  resources :movies, :only => [:index, :create]
  
end
