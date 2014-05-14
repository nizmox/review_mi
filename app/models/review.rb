# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  content_id  :integer
#  rating      :integer
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Review < ActiveRecord::Base
  attr_accessible :rating, :description

  validates :rating, :numericality => true
  validates :rating, :inclusion => { :in => 1..10 }

  #relationships
  belongs_to :user
  belongs_to :content
  # has_one :media, :through => :content
end
