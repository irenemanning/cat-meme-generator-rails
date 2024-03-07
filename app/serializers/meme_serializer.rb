class MemeSerializer < ActiveModel::Serializer
  attributes :id, :caption_one, :caption_two, :cmuser_id
end
