class MemeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :caption_one, :caption_two, :image_url, :cmuser_id
  belongs_to :cmuser
  has_many :meme_likes

  def image_url
    rails_blob_url(object.image, only_path: true) if object.image.attached?
  end
end