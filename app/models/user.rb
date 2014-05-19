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
  
  validates :username, :presence => true, 
                       :uniqueness => true,
                       :length => { :minimum => 8, :maximum => 20 }, 
                       :format => { with: /\A[A-z0-9_]+\z/, message: "only allows letters, numbers and underscores" }

  validates :email, :presence => true

  validates :password, :length => { :minimum => 8 }, 
                       :format => { with: /\A\S+\z/, message: "cannot include whitespace characters"},
                       :presence => { :on => :create }
                       # password must match password_confirmation (automatic)

  #relationships
  has_many :reviews

  #use bcrypt to convert password to a password digest
  has_secure_password
end
