class User < ApplicationRecord
	has_many :user_groupships
    has_many :groups, :through => :user_groupships
    has_many :images
    has_many :articals
end
