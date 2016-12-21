class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string 'title'
      t.integer 'user_id'
      t.text 'context'
      t.string 'image_url'
      t.string 'create_time'
      t.timestamps
    end
  end
end
