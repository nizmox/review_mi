class AddImageToContent < ActiveRecord::Migration
  def change
    add_column :contents, :image, :text
  end
end
