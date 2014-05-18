class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    # check for a session - user_id
    if session[:user_id] != nil
      user = User.where(:id => session[:user_id]).first 
    else
      user = nil
    end
  end

  # returns true if the user is signed in
  def user_signed_in?
    session[:user_id] != nil
  end

end
