# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150505152027) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "violations", force: :cascade do |t|
    t.integer "boro_id"
    t.integer "violation_id"
    t.integer "building_id"
    t.string  "house_number"
    t.string  "street_name"
    t.string  "apt_number"
    t.string  "zip_code"
    t.date    "approval_date"
    t.date    "current_status_date"
    t.string  "current_status"
    t.string  "boro"
    t.text    "description"
    t.string  "keyword"
    t.string  "subcat"
  end

end
