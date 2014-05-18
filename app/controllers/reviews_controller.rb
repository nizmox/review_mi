class ReviewsController < ApplicationController

  # THIS DOESN'T WORK
  before_action :user_signed_in?, :only => [:create]

  def index
    #FIX: change this to all reviews of friends
    @reviews = Review.all

    render :json => @reviews
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
end