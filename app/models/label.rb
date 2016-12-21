class Label < ApplicationRecord
	has_many :image_labelships
    has_many :images, :through => :image_labelships
end
