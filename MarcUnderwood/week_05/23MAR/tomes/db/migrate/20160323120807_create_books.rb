class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :writer
      t.text :publisher
      t.date :published
      t.text :subject
      t.integer :pages
      t.text :image
      t.timestamps
    end
  end
end
