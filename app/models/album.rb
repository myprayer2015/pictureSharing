class Album < ApplicationRecord
	has_many :image_albumships
    has_many :images, :through => :image_albumships
end
