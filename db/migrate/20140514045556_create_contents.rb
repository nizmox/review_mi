class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :title
      t.integer :media_id
      t.string :media_type

      t.timestamps
    end
  end
end
