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
    it { should respond_to (:metascore) }
    it { should respond_to (:imdb_id) }
    it { should respond_to (:imdb_type) }
    it { should respond_to (:imdb_rating) }
    it { should respond_to (:imdb_votes) }

  end

  describe '.create' do
    context 'with valid information' do

      # sample data from omdb for "Predators" movie
      omdb_sample = {
        "year"=>"2010",
        "rated"=>"R",
        "released"=>"09 Jul 2010",
        "runtime"=>"107 min",
        "genre"=>"Action, Adventure, Sci-Fi",
        "director"=>"Nimród Antal",
        "writer"=>"Alex Litvak, Michael Finch, Jim Thomas (characters), John Thomas (characters)",
        "actors"=>"Adrien Brody, Topher Grace, Alice Braga, Walton Goggins",
        "plot"=>"A group of elite warriors are hunted by members of a merciless alien race known as Predators.",
        "language"=>"English, Spanish, Russian",
        "country"=>"USA",
        "awards"=>"2 wins & 1 nomination.",
        "metascore"=>"51",
        "imdb_id"=>"tt1424381",
        "imdb_type"=>"movie",
        "imdb_rating"=>6,
        "imdb_votes"=>140,
      }

      let(:movie) { Movie.create(omdb_sample) }
      subject { movie }

      its(:year) { should == "2010" }
      its(:rated) { should == "R" }
      its(:released) { should == "09 Jul 2010" }
      its(:runtime) { should == "107 min" }
      its(:genre) { should == "Action, Adventure, Sci-Fi" }
      its(:director) { should == "Nimród Antal" }
      its(:writer) { should == "Alex Litvak, Michael Finch, Jim Thomas (characters), John Thomas (characters)" }
      its(:actors) { should == "Adrien Brody, Topher Grace, Alice Braga, Walton Goggins" }
      its(:plot) { should == "A group of elite warriors are hunted by members of a merciless alien race known as Predators." }
      its(:language) { should == "English, Spanish, Russian" }
      its(:country) { should == "USA" }
      its(:awards) { should == "2 wins & 1 nomination." }
      its(:metascore) { should == "51" }
      its(:imdb_id) { should == "tt1424381" }
      its(:imdb_type) { should == "movie" }
      its(:imdb_rating) { should == 6 }
      its(:imdb_votes) { should == 140 }

      it "should be valid" do
        subject.should be_valid
      end
    end
  end

  describe 'with invalid data' do
    let(:movie) { Movie.new }
    subject { movie }
    
    it "must have a imdb_id" do
      subject.should_not be_valid
    end
  end

end
