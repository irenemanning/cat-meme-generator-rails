Rails.application.routes.draw do
  resources :users
  resources :meme_likes
  resources :memes
  
  get '/hello', to: 'application#hello_world'

  get "/me", to: "cmusers#show"
  post "/signup", to: "cmusers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
