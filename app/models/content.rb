# == Schema Information
#
# Table name: contents
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  media_id   :integer
#  media_type :string(255)
#  created_at :datetime
#  updated_at :datetime
#  image      :text
#

class Content < ActiveRecord::Base

  attr_accessible :title, :image

  #relationships
  has_many :reviews
  belongs_to :media, :polymorphic => true
end
