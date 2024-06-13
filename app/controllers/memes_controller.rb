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
      meme = @current_user.memes.new(meme_params.except(:image))
      if meme_params[:image].present?
        meme.image.attach(meme_params[:image])
      end
      if meme.save
        render json: meme, status: :created
      else
        render json: { error: 'Image not attached' }, status: :unprocessable_entity
      end
    end
  
    def update
      meme = @current_user.memes.find_by(id: params[:id])
      if meme.update(meme_params.except(:image))
        if meme_params[:image].present?
          meme.image.attach(meme_params[:image])
        end
        render json: meme
      else
        render json: meme.errors, status: :unprocessable_entity
      end
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
  