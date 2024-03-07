class CreateMemeLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :meme_likes do |t|
      t.integer :cmuser_id
      t.integer :meme_id

      t.timestamps
    end
  end
end
