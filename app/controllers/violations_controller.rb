class ViolationsController < ApplicationController

  def index
    gon.data = Violation.get_bar_chart_data(1)
    
    gon.sunburst_data = Violation.get_sunburst_data(1)
   
  end

  def manhattan
    gon.data = Violation.get_bar_chart_data(1)
    
    gon.sunburst_data = Violation.get_sunburst_data(1)

  end

  def bronx
    gon.data = Violation.get_bar_chart_data(2)
    
    gon.sunburst_data = Violation.get_sunburst_data(2)

  end

  def brooklyn
    gon.data = Violation.get_bar_chart_data(3)
    
    gon.sunburst_data = Violation.get_sunburst_data(3)

  end

  
end




