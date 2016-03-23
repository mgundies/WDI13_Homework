# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :text
#  author     :text
#  publisher  :text
#  published  :date
#  subject    :text
#  pages      :integer
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#

class Book < ActiveRecord::Base
  belongs_to :author
end
