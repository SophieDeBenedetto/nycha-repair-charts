class Violations < ActiveRecord::Migration
  def change

    create_table :violations do |f|
      f.integer :boro_id
      f.integer :violation_id
      f.integer :building_id
      f.string :house_number
      f.string :street_name
      f.string :apt_number
      f.string :zip_code
      f.date :approval_date
      f.date :current_status_date
      f.string :current_status
      f.string :boro
      f.text :description
      f.string :keyword
    end
  end
end
