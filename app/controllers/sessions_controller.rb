class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      user = Cmuser.find_by(username: params[:cmuser][:username])
      if user&.authenticate(params[:cmuser][:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :cmuser_id
      render json: { errors: ["Please Login Again"] }, status: :no_content
    end

end
