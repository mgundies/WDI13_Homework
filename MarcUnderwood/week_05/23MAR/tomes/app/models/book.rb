# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :text
#  writer     :text
#  publisher  :text
#  published  :date
#  subject    :text
#  pages      :integer
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#  author_id  :integer
#

class Book < ActiveRecord::Base
  belongs_to :author
end
