class UsersController < ApplicationController
  def create
    @user = User.create(params[:user])
    if @user
      login_user!(@user)
      render :json => @user
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
