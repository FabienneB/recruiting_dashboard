# frozen_string_literal: true

# Candidate model
# A candidate belongs to a job_opening
class Candidate < ApplicationRecord
  belongs_to :job_opening
  validates :first_name, :last_name, :category, :job_name, presence: true
  scope :job_candidates, ->(id) { where(job_opening_id: id) }
end
