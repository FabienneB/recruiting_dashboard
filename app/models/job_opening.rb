# frozen_string_literal: true

# JobOpening model
# A JobOpening has many candidates
class JobOpening < ApplicationRecord
  validates :title, presence: true
  validates_uniqueness_of :title
  has_many :candidates
end
