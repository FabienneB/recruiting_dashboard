class CreateCandidates < ActiveRecord::Migration[5.2]
  def change
    create_table :candidates do |t|
      t.string :first_name
      t.string :last_name
      t.string :job_name
      t.string :category
      t.integer :approval_count
      t.string :avatar_link
      t.references :job_opening, foreign_key: true
      t.timestamps
    end
  end
end
