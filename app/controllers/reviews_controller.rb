class ReviewsController < ApplicationController
  def index
    #FIX: change this to all reviews of friends
    @reviews = Review.all

    render :json => @reviews
  end

  def show
    @review = Review.find(params[:id])

    render :json => @review
  end

  # def create
  #   @review = Review.new(params)

  #   if @review.save
  #     render :action => 'show', :status => :created, :location => @review
  #   else
  #     render :json => @review.errors, :status => :unprocessable_entity
  #   end
  # end
end