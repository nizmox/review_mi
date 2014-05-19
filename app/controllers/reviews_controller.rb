class ReviewsController < ApplicationController

  # THIS DOESN'T WORK
  before_action :signin_required, :only => [:create]

  def index
    #FIX: change this to all reviews of friends
    reviews = Review.all

    render :json => reviews #, :include => {:user => {:only => :username}}
  end

  # def show
  #   @review = Review.find(params[:id])

  #   render :json => @review
  # end

  def create
    #includes: content_id, rating, description
    review = current_user.reviews.new(params[:review])

    if review.save
      render :json => {:success => true, :message => "SUCCESS: review has been saved", :review => review}
    else
      render :json => {:success => false, :message => "ERROR: review could not be saved"}
    end
  end

  private
  def signin_required
    unless current_user
      render :json => {:success => false, :status => 401, :message => "ERROR: you must be signed in to create a review"}
    end
  end
end