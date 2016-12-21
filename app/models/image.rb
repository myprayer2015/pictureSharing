class Image < ApplicationRecord
	belongs_to :user, :class_name => 'User', :foreign_key => :user_id
	has_many :image_albumships
    has_many :albums, :through => :image_albumships
    has_many :image_labelships
    has_many :labels, :through => :image_labelships
end
