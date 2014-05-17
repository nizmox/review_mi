class SessionController < ApplicationController

  def create
    user = User.where(:username => params[:username]).first
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id

      render :json => {:success => true, :message => "SUCCESS: logged in as #{user.username}", 
                       :username => user.username}
    else
      session[:user_id] = nil

      render :json => {:success => false, :message => 'ERROR: Incorrect username or password, please try again.'}
    end
  end

  def destroy
    session[:user_id] = nil

    render :json => {:success => true, :message => 'SUCCESS: logged out'}
  end

end