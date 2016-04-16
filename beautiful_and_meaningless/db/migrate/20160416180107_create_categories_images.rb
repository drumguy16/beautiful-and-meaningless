class CreateCategoriesImages < ActiveRecord::Migration
  def change
    create_table :categories_images, id: false do |t|
      t.belongs_to :category, index: true
      t.belongs_to :image, index: true
    end
  end
end
