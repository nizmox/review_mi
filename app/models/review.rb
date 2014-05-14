# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  content_id :integer
#  rating     :integer
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#

class Review < ActiveRecord::Base
  attr_accessible :rating, :content

  validates :rating, :numericality => true
  validates :rating, :inclusion => { :in => 1..10 }
end
