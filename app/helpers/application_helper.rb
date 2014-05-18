module ApplicationHelper

  # returns the username of the signed in user (to store in javascript variable) or '' if not signed in
  def current_username
    # check for a session - user_id
    user_id = session[:user_id]
    if user_id != nil
      # perform a query for this user
      user = User.where(:id => user_id).first
      # if a result was found
      if user.present?
        return user.username
      # specified user_id could not be found
      else
        # clear session
        session[:user_id] = nil
      end
    end
    return ''
  end

end
