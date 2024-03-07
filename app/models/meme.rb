class Meme < ApplicationRecord
    belongs_to :cmuser
    has_many :meme_likes
    has_one_attached :image
end
