# == Schema Information
#
# Table name: movies
#
#  id          :integer          not null, primary key
#  year        :string(255)
#  rated       :string(255)
#  released    :string(255)
#  runtime     :string(255)
#  genre       :string(255)
#  director    :text
#  writer      :text
#  actors      :text
#  plot        :text
#  language    :string(255)
#  country     :string(255)
#  awards      :string(255)
#  metascore   :string(255)
#  imdb_id     :string(255)
#  imdb_type   :string(255)
#  imdb_rating :integer
#  imdb_votes  :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Movie < ActiveRecord::Base
  attr_accessible :year, :rated, :released, :runtime, :genre, :director, :writer, :actors, :plot, :language, 
  :country, :awards, :metascore, :imdb_id, :imdb_type, :imdb_rating, :imdb_votes

  has_one :content, :as => :media

  validates :imdb_id, :presence => true
end




