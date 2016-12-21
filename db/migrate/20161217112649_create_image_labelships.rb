class CreateImageLabelships < ActiveRecord::Migration[5.0]
  def change
    create_table :image_labelships do |t|
      t.integer 'image_id'
      t.integer 'label_id'
      t.timestamps
    end
  end
end
