class ViolationsController < ApplicationController

  def index
    gon.man_data = Violation.get_bar_chart_data(1)
    gon.bx_data = Violation.get_bar_chart_data(2)
    gon.bk_data = Violation.get_bar_chart_data(3)
  end

  def manhattan
    gon.man_data = Violation.get_bar_chart_data(1)
    gon.man_sunburst_data = Violation.get_sunburst_data(1)
  end

  def bronx
    gon.bx_data = Violation.get_bar_chart_data(2)
    gon.bx_sunburst_data = Violation.get_sunburst_data(2)

  end

  def brooklyn
    gon.bk_data = Violation.get_bar_chart_data(3)
    gon.bk_sunburst_data = Violation.get_sunburst_data(3)

  end

  
end




