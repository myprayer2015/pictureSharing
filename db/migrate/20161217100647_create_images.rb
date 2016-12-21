class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer 'user_id'
      t.string 'create_time'
      t.string 'url'
      t.string 'title'
      t.timestamps
    end
  end
end
