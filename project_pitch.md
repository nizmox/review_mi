#ReviewMi

The concept is to build a site that allows users to review Movies, TV, Games, Music, and Books that they like by providing a star rating and a more detailed reveiw if they wish.

Users can view 'content' that has been reviewed by their friends and view an aggregated review score based solely on the reviews of their friends and NOT other site users. Users can also see all text reviews as posted by their friends.

The site should use APIs in order to fetch meta data about the type of content being reviewed e.g. OMDb for Movies or GoodReads for Books. It will not be possible to implement all types of content to be reviewed within the scope of this project so it will likely be limited to 1 or 2 initially.

##Schema design
Users
Friends (self join table with users)
Movies (store data retrieved from OMDb)
Reviews
Comments (Nice to have)

Content - Polymorphism? Single Table Inheritance

Users --friends-< Users
User -< Reviews
Movie -< Reviews
Review -< Comments (Nice to have)
User -< Comments (Nice to have)


##Must Have Features

* Ability for the user to sign in and signup
* Ability for the user to add friends
* Friendship should be in a pending state until confirmed by the other user but is bidirectional once confirmed
* Ability to select a movie (will fetch titles from omdb) and create a review for that movie. The user cannot create a review unless the content exists in the API.
* Ability to view reviews of friends which includes an aggregated friends rating and an overall site rating (scored using all users on reviewmi's scores)
* Reviews should be sorted based on which review was created most recently by that users friends
* Cache API information on the server side when a review is created for new content
* Single page app with scrolling, could flick automatically between reviews for the same content


##Nice to Have Features
Ability to comment on a review
Friend lists should be automated using facebook.
Search entire site for ratings from other users (not friends)
Add additional content types (books, tv shows, games etc..)

##Technology

* rspec
* backbone.js & underscore.js
* bcrypt (I'm not using devise to avoid dealing with AJAX issues)
* omdb api and possibly other content apis e.g. goodreads