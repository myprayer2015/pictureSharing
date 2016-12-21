class CreateImageAlbumships < ActiveRecord::Migration[5.0]
  def change
    create_table :image_albumships do |t|
      t.integer 'image_id'
      t.integer 'album_id'
      t.timestamps
    end
  end
end
