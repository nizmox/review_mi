class ReviewsController < ApplicationController

  before_action :signin_required, :only => [:create]

  def index
    #FIX: change this to all reviews of friends
    reviews = Review.all

    render :json => reviews, :include => {:user => {:only => :username}}
  end

  def create

    #escape the review text submitted to the server
    safe_params = params[:review]
    safe_params[:description] = CGI::escapeHTML(safe_params[:description])

    #includes: content_id, rating, description
    review = current_user.reviews.new(safe_params)

    if review.save
      render :json => review, :include => {:user => {:only => :username}}
    else
      render :json => {:error => true, :message => "ERROR: review could not be saved"}
    end
  end

  private
  def signin_required
    unless current_user
      render :json => {:error => true, :status => 401, :message => "ERROR: you must be signed in to create a review"}
    end
  end
end