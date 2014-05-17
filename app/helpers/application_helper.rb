module ApplicationHelper

  def current_user
    # check for a session - user_id
    user_id = session[:user_id]
    if user_id != nil
      # perform a query for this user
      user = User.where(:id => user_id).first
      # if a result was found
      if user.present?
        user.username
      # specified user_id could not be found
      else
        # clear session
        session[:user_id] = nil
        ''
      end
    else
      ''
    end
  end

end
