class ContentsController < ApplicationController

  def index
    contents = Content.all

    render :json => contents, :include => :media 
  end

end