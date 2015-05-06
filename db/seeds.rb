# contains data from NYC Open Data database. Accessible throuhg SODA API

client = SODA::Client.new({:domain => "data.cityofnewyork.us", :app_token => ENV["OPEN_DATA_APP_TOKEN"]})

#manhattan borough data, id = 1
#bk borough data, id = 3
#bronx borough data, id = 2


response = client.get("wvxf-dwi5", {:boroid => 2})

response.each do |r|
  violation = Violation.create(violation_id: r.violationid, building_id: r.buildingid, house_number: r.housenumber,
    street_name: r.streetname, apt_number: r.apartment, zip_code: r["zip"], approval_date: r.approveddate,
    current_status_date: r.currentstatusdate, current_status: r.currentstatus, boro: r.boro, 
    description: r.novdescription[20..-1].downcase, boro_id: 2)

  if r.novdescription.downcase.include?("mold")
    violation.keyword = "Mold"
  elsif r.novdescription.downcase.include?("water leak")
    violation.keyword = "Water Leak"
  elsif r.novdescription.downcase.include?("plastered") ||r.novdescription.downcase.include?("paint")
    violation.keyword = "Plaster/Paint"
  elsif r.novdescription.downcase.include?("lock")
    violation.keyword = "Broken Lock"
  elsif r.novdescription.downcase.include?("smoke detector")
    violation.keyword = "Fire Hazard"
  elsif r.novdescription.downcase.include?("mice") || r.novdescription.downcase.include?("roaches") || r.novdescription.downcase.include?("rodents") || r.novdescription.downcase.include?("vermin")
    violation.keyword = "Insect/rodent infestation"
  elsif r.novdescription.downcase.include?("electric outlet") || r.novdescription.downcase.include?("light switch")
    violation.keyword = "Electrical"
  elsif r.novdescription.downcase.include?("window") || r.novdescription.downcase.include?("missing glass") || r.novdescription.downcase.include?("window guards")
    violation.keyword = "Window"
  elsif r.novdescription.downcase.include?("lead paint")
    violation.keyword = "Lead Paint"
  elsif r.novdescription.downcase.include?("carbon monoxide")
    violation.keyword = "CO Detector"
  elsif r.novdescription.downcase.include?("bathroom") 
    violation.keyword = "Bathroom"
  elsif r.novdescription.downcase.include?("defective faucets") || r.novdescription.downcase.include?("hot water") || r.novdescription.downcase.include?("cold water")
    violation.keyword = "Water/Plumbing"
  else 
    violation.keyword = "Misc."
  end
  violation.save
      
    
end
    




