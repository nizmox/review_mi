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
#

class Content < ActiveRecord::Base

  #relationships
  has_many :reviews
  belongs_to :media, :polymorphic => true
end
