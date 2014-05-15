# == Schema Information
#
# Table name: movies
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  year        :string(255)
#  rated       :string(255)
#  released    :string(255)
#  runtime     :string(255)
#  genre       :string(255)
#  director    :string(255)
#  writer      :string(255)
#  actors      :string(255)
#  plot        :string(255)
#  language    :string(255)
#  country     :string(255)
#  awards      :string(255)
#  poster      :string(255)
#  metascore   :string(255)
#  imdb_id     :string(255)
#  imdb_type   :string(255)
#  imdb_rating :integer
#  imdb_votes  :integer
#

require 'spec_helper'

describe Movie do
  describe '.new' do
    let(:movie) { Movie.new }
    subject { movie }
    
    it "should return a new movie" do
      subject.should_not be_nil
    end

    it { should respond_to (:year) }
    it { should respond_to (:rated) }
    it { should respond_to (:released) }
    it { should respond_to (:runtime) }
    it { should respond_to (:genre) }
    it { should respond_to (:director) }
    it { should respond_to (:writer) }
    it { should respond_to (:actors) }
    it { should respond_to (:plot) }
    it { should respond_to (:language) }
    it { should respond_to (:country) }
    it { should respond_to (:awards) }
    it { should respond_to (:poster) }
    it { should respond_to (:metascore) }
    it { should respond_to (:imdb_id) }
    it { should respond_to (:imdb_type) }
    it { should respond_to (:imdb_rating) }
    it { should respond_to (:imdb_votes) }

  end

end
