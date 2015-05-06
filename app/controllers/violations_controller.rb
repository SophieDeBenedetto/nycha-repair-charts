class ViolationsController < ApplicationController

  def index
    gon.data = Violation.get_bar_chart_data(1)
    
    gon.sunburst_data = Violation.get_sunburst_data(1)
   
  end

  def manhattan

  end

  def bronx

  end

  def brooklyn

  end

  
end




