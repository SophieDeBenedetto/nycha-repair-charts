class Violation < ActiveRecord::Base


  def self.get_sunburst_data(boro_id)

   Violation.where("boro_id = ?", boro_id).group_by { |v| v.keyword }.map do |keyword, violations|
        {
          name: keyword,
          children: violations.group_by{ |v| v.subcat }.map do |subcat, violations|
            {
              name: subcat,
              count: violations.count
            }
          end
        }
      end

  end

  def self.get_bar_chart_data(boro_id)
     Violation.where("boro_id = ?", boro_id).group_by { |v| v.keyword }.map do |keyword, violations|
        {keyword: keyword, value: violations.count}
      end

  end
  

end
