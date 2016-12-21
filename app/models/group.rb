class Group < ApplicationRecord
	has_many :user_groupships
    has_many :users, :through => :user_groupships
end
