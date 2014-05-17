ReviewMi::Application.routes.draw do

  root 'home#index'

  resources :reviews, :only => [:index, :show, :create]
  resources :movies, :only => [:index, :create]

  #sessions
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  
end
