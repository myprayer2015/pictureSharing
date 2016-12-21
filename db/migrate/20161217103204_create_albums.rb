class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string 'title'
      t.integer 'user_id'
      t.string 'create_time'
      t.timestamps
    end
  end
end
