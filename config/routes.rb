ReviewMi::Application.routes.draw do

  root 'home#index'

  resources :reviews, :only => [:index, :show, :create]

  resources :contents, :only => [:index]

  resources :movies, :only => [:create]
  get '/movies/search/:imdb_id' => 'movies#omdb_fetch'

  #sessions
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  
end
