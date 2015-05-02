class ViolationsController < ApplicationController

  def index
    plaster_count = Violation.where("keyword = ?", "Plaster/Paint").count
    mold_count = Violation.where("keyword = ?", "Mold").count
    fire_hazard_count = Violation.where("keyword = ?", "Fire Hazard").count
    water_leak_count = Violation.where("keyword = ?", "Water Leak").count
    bathroom_count = Violation.where("keyword = ?", "Bathroom").count
    infestation_count = Violation.where("keyword = ?", "Insect/rodent infestation").count
    co_count = Violation.where("keyword = ?", "CO Detector").count
    window_count = Violation.where("keyword = ?", "Window").count
    lock_count = Violation.where("keyword = ?", "Broken Lock").count
    water_count = Violation.where("keyword = ?", "Water/Plumbing").count
    el_count = Violation.where("keyword = ?", "Electrical").count
    
    gon.data = [
    {keyword: "Plaster/Paint",    value:  plaster_count},
    {keyword: "Mold",    value:  mold_count},
    {keyword: "Fire Hazard",     value: fire_hazard_count},
    {keyword: "Water Leak",   value: water_leak_count},
    {keyword: "Bathroom",   value: bathroom_count},
    {keyword: "Infestation",   value: infestation_count},
    {keyword: "Broken Carbon Monoxide Detector",   value: co_count},
    {keyword: "Window",   value: window_count},
    {keyword: "Broken Lock",   value: lock_count},
    {keyword: "Water/Plumbing",   value: water_count},
    {keyword: "Electrical",   value: el_count},
    ]

  end

  
end

