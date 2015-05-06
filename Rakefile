# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

desc "add subcategory to violations"
task :add_subcat  => :environment do
  Violation.where("keyword =?", "Insect/rodent infestation").each do |v|
    if v.description.downcase.include?("mice")
      v.subcat = "mice"
    elsif v.description.downcase.include?("rat")
      v.subcat = "rat"
    elsif v.description.downcase.include?("roach") || v.description.downcase.include?("insect")
      v.subcat = "insect"

    end
    v.save
  end

  Violation.where("keyword =?", "Fire Hazard").each do |v|
    if v.description.downcase.include?("smoke detector")
      v.subcat = "smoke detector"
    elsif v.description.downcase.include?("fire escape")
      v.subcat = "fire escape"
    end
    v.save
  end

  Violation.where("keyword =?", "Window").each do |v|
    if v.description.downcase.include?("glass")
      v.subcat = "broken glass"
    elsif v.description.downcase.include?("guard")
      v.subcat = "broken window guards"
    end
    v.save
  end

  


end
