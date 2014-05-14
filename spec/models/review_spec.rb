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

require 'spec_helper'

describe Review do

  it { should belong_to(:user) }

  describe '.new' do
    let(:review) { Review.new }
    subject { review }
    
    it "should return a new review" do
      subject.should_not be_nil
    end

    it { should respond_to(:rating) }
    it { should respond_to(:description) }
  end

  # description to use to test .create
  description = "'Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.')"

  describe '.create' do
    context 'with valid information' do

      let(:review) { Review.create(:rating => 5, :description => description) }
      subject { review }

      its(:rating) { should == 5 }
      its(:description) { should == description }

      it "should be valid" do
        subject.should be_valid
      end
    end
  end

  describe 'with invalid data' do
    context 'an invalid rating' do
      let(:review) { Review.new(:description => description) }
      subject { review }

      it "it should be > 0" do
        subject.rating = 0
        subject.should_not be_valid
        subject.errors.messages[:rating].include? "is not included in the list"
      end

      it "it should be <= 10" do
        subject.rating = 11
        subject.should_not be_valid
        subject.errors.messages[:rating].include? "is not included in the list"
      end

      it "should be numeric" do
        subject.rating = 'ten'
        subject.should_not be_valid
        subject.errors.messages[:rating].include? "is not a number"
      end
    end
  end
end
