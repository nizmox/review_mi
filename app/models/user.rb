# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  attr_accessible :username, :email, :password, :password_confirmation
  
  validates :username, :presence => true
  validates :email, :presence => true

  validates :username, :length => { :minimum => 8, :maximum => 20 }
  validates :username, format: { with: /\A[A-z0-9_]+\z/, message: "only allows letters, numbers and underscores" }

  validates :password, :length => { :minimum => 8 }
  validates :password, format: { with: /\A\S+\z/, message: "cannot include whitespace characters"}

  # validates :password, format: {with: /((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,20})/, message: "must contain a number, upper case letter and lower case letter"}
  #use bcrypt to convert password to a password digest
  has_secure_password
end
