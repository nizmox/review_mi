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

require 'spec_helper'

describe Content do
  describe '.new' do
    let(:content) { Content.new }
    subject { content }

    it "should return a new content" do
      subject.should_not be_nil
    end

    it { should respond_to(:title) }
    it { should respond_to(:image) }
  end

  describe '.create' do
    context 'with valid information' do
      let(:content) do 
        Content.create(:title => 'Jaws', :image => 'http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX300.jpg') 
      end
      subject { content }

      its(:title) { should == 'Jaws'}
      its(:image) { should == 'http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX300.jpg'}
      
      # should be valid
      it "should be valid" do
        subject.should be_valid
      end
    end
  end

  # describe 'with invalid data' do
  #   context 'title cannot be blank' do
  #     content = Content.new(:title => '')
  #     content.valid?.should be_false
  #   end
  # end
end
