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

require 'spec_helper'

describe User do
  describe '.new' do
    let(:user) { User.new }
    subject { user }

    it "should return a new user" do
      subject.should_not be_nil
    end

    it { should respond_to(:username) }
    it { should respond_to(:email) }
    it { should respond_to(:password_digest) }
  end

  describe '.create' do
    context 'with valid information' do
      let(:user) do 
        User.create(:username => 'testuser', :email => 'test@test.com', 
                    :password => 'abcd1234', :password_confirmation => 'abcd1234') 
      end
      subject { user }

      its(:username) { should == 'testuser'}
      its(:email) { should == 'test@test.com'}
      its(:password_digest) { should_not be_nil}
      
      # should be valid
      it "should be valid" do
        subject.should be_valid
      end
    end
  end

  describe 'with invalid data' do
    context 'an invalid username' do
      let(:user) { User.new(:email => 'test@test.com', :password => 'abcd1234', :password_confirmation => 'abcd1234') }
      subject { user }

      it "should be at least 8 characters in length" do
        subject.username = 'user101'
        subject.valid?.should be_false
        subject.errors.messages[:username].include? "is too short (minimum is 8 characters)"
      end

      it "should be at less 20 characters in length" do
        subject.username = 'testuser1234567890abc' # 21 characters long
        subject.valid?.should be_false
        subject.errors.messages[:username].include? "is too long (maximum is 20 characters)"
      end

      it "should only contain characters [A-z] or [0-9] or _" do
        error_msg = "only allows letters, numbers and underscores"

        subject.username = 'test user'
        subject.valid?.should be_false
        subject.errors.messages[:username].include? error_msg

        subject.username = 'test&user'
        subject.valid?.should be_false
        subject.errors.messages[:username].include? error_msg
      end
    end

    context 'an invalid password' do
      let(:user) { User.new(:username => 'testuser1', :email => 'test@test.com') }
      subject { user }

      it "should be at least 8 characters in length" do
        subject.password = 'abcd123'
        subject.password_confirmation = 'abcd123'
        subject.valid?.should be_false
        subject.errors.messages[:password].include? "is too short (minimum is 8 characters)"
      end

      it "does not contain whitespace" do
        subject.password = 'ABCD abcd'
        subject.password_confirmation = 'ABCD abcd' 
        subject.valid?.should be_false
        subject.errors.messages[:password].include? "cannot include whitespace characters"
      end

    end
  end
end
