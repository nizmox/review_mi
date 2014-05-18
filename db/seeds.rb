# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Review.destroy_all
Content.destroy_all
Book.destroy_all
Movie.destroy_all

user = User.create(:username => 'testuser', :email => 'test@test.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')

# review = user.reviews.create(:rating => 10, :description => 'it was fucking amazing')

# content = Content.create(:title => 'Alien vs Predator')
# review.content = content
# review.save

# movie = Movie.create(:title => 'Alien vs Predator')
# content.media = movie
# content.save

# review2 = user.reviews.create(:rating => 2, :description => 'it was way too long')

# content2 = Content.create(:title => 'War and Peace')
# review2.content = content2
# review2.save

# book = Book.create(:title => 'War and Peace')
# content2.media = book
# content2.save