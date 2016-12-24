require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  	def setup
  		@user = User.new(name: "123", password: "user@example.com")
  	end

  	test "should be valid" do
  		assert @user.valid?
  	end

 	test "name should be present" do
 		assert @user.valid?
 	end

 	test "name should not be too long" do
 	end
end
