class User < ApplicationRecord
	has_many :user_groupships
   	has_many :groups, :through => :user_groupships
   	has_many :images
   	has_many :articals
   	validates :name, presence: true, length: {maximum: 50, minimum: 6}
   	validates :password, presence: true, length: {maximum: 20, minimum: 6}
   	'''安全密码，对密码进行哈希加密，存储到数据库中。验证时，获取密码，再进行哈希加密，然后与数据库中的
	对比'''
   	has_secure_password
end
