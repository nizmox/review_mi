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

  #relationships
  has_many :reviews
  # has_many :content, through :reviews

  #use bcrypt to convert password to a password digest
  has_secure_password
end
