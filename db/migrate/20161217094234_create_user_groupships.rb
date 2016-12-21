class CreateUserGroupships < ActiveRecord::Migration[5.0]
  def change
    create_table :user_groupships do |t|
      t.integer 'user_id'
      t.integer 'group_id'
      t.integer 'relation'
      t.timestamps
    end
  end
end
