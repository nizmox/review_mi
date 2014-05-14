source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.4'

# Use postgresql as the database for Active Record
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.2'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

#-------------------------------

#RAILS RELATED

#debugging Gems
group :development do
  gem 'pry-rails'
  gem 'pry-debugger'
  gem 'pry-stack_explorer'
  gem 'better_errors'
  gem 'binding_of_caller'
end

#prevent mass assignment to attributes not explicitly allowed
gem 'protected_attributes'

#to annotate our models
gem 'annotate'

#enables use of ENV hash using .env file (DONT FORGET TO MODIFY .gitignore !)
# gem 'dotenv-rails'

#added for user authentication
# gem 'devise'

# required to use has_secure_password
gem 'bcrypt-ruby'

#testing gems
# gem 'factory_girl_rails'
# gem 'faker'

gem 'simplecov', :require => false, :group => :test

group :development, :test do
  gem 'rspec-rails' #, '~> 3.0.0.beta'
end

#AWS IMAGE UPLOAD

#supports user logins and image uploads
# gem 'rails_12factor'

#allows upload of Profile Avatar images to Heroku from Amazon S3
# gem 'carrierwave'

#Interact with a variety of file services #carrierwave handles the fog interaction;
# gem 'fog', "~> 1.3.1"

#STYLING RELATED

# bootstrap! for styling
# gem 'bootstrap-sass'

#JAVASCRIPT RELATED

#underscore javascript library
# gem 'underscore-rails'

#to allow better timestamp formatting
# gem 'momentjs-rails'