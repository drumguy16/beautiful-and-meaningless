class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.string :content, null:false

      t.timestamps null: false
    end
  end
end
