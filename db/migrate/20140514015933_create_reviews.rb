class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :content_id
      t.integer :rating
      t.text :description

      t.timestamps
    end
  end
end
