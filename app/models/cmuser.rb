class Cmuser < ApplicationRecord
    has_one_attached :profile_image
    has_many :memes
    has_many :likes

    has_secure_password
    
end
