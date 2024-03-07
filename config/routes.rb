Rails.application.routes.draw do
  resources :meme_likes
  resources :memes
  
  get "/me", to: "cmusers#show"
  post "/signup", to: "cmusers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
