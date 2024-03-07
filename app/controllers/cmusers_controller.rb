class CmusersController < ApplicationController
    #  /me
    def show
        render json: @current_user
    end

    # /signup
    def create
        user = Cmuser.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:wuser).permit(:username, :password, :password_confirmation, :profile_image)
    end

end
