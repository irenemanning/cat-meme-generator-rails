class CmusersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    #  /me
    def show
        render json: @current_user
    end

    # /signup
    def create
        cmuser = Cmuser.create(user_params)
        if cmuser.valid?
          session[:user_id] = cmuser.id
          render json: cmuser, status: :created
        else
          render json: { errors: cmuser.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:cmuser).permit(:username, :password, :password_confirmation, :profile_image)
    end

end
