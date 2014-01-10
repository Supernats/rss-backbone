class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json do
        render :json => Feed.all.to_json(:include => :entries)
      end
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed.to_json(:include => :entries)
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end