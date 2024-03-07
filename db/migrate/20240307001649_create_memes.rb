class CreateMemes < ActiveRecord::Migration[7.0]
  def change
    create_table :memes do |t|
      t.string :caption_one
      t.string :caption_two
      t.integer :cmuser_id

      t.timestamps
    end
  end
end
