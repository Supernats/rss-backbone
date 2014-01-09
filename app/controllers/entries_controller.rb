class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    feed.reload if (Time.now - feed.updated_at > 120)
    render :json => feed.entries
  end
end
