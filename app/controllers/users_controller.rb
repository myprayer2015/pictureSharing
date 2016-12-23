class UsersController < ApplicationController
	def index

	end
	def show

	end
	def new
		@user = User.new
	end
	def create
		params.permit!
		@user = User.new(params[:user])
		if@user.save
			session['loginedUser'] = @user
			redirect_to :controller=>'home',:action=>'index'
		else
			redirect_to :controller=>'home', action=>'index'
	end
	def edit

	end
	def update

	end
	def destroy

	end
end
