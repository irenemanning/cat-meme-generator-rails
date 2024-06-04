class MemesController < ApplicationController
    before_action :authorize
    
    def index
        memes = Meme.order(created_at: :desc)
        render json: memes
    end
    def show
        meme = find_meme
        render json: meme
    end
    def create
        meme = @current_user.memes.create!(meme_params)
        render json: meme, status: :created
    end
    def update
        meme = @current_user.memes.find_by(id: params[:id])
        meme.update!(post_params)
        render json: meme
    end
    def destroy
        meme = find_meme
        meme.destroy
        head :no_content
    end

    private 

    def meme_params
        params.require(:meme).permit(:caption_one, :caption_two, :image)
    end
    def find_meme
        Meme.find_by(id: params[:id])
    end
end
