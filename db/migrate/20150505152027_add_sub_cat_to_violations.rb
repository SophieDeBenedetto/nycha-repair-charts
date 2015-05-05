class AddSubCatToViolations < ActiveRecord::Migration
  def change
    add_column :violations, :subcat, :string
  end
end
