class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(*params[:user])
    !!@user && login_user!(@user)
    render :json => @user
  end

  def destroy
    logout_user!
    head :ok
  end
end