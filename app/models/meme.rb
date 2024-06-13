class Meme < ApplicationRecord
    belongs_to :cmuser
    has_many :meme_likes, dependent: :destroy
    has_one_attached :image
end
