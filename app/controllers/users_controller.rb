class UsersController < ApplicationController

  def create

    user = User.new params[:user]

    if user.save
      session[:user_id] = user.id

      # need to send user_name to update javascript
      render :json => {:error => false, :message => "SUCCESS: registration successful", :username => user.username}
    else
      render :json => {:error => true, :message => "ERROR: registration failed", :errors => user.errors.messages}
    end

  end

end