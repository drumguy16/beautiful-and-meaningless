Rails.application.routes.draw do
  resources :users
   root 'landing#index'


end
