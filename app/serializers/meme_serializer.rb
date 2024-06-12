class MemeSerializer < ActiveModel::Serializer
  attributes :id, :caption_one, :caption_two, :cmuser_id
  belongs_to :cmuser
  has_many :meme_likes
end
