NewReader::Application.routes.draw do
  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end

  root to: "feeds#index"
end
