# frozen_string_literal: true

# Candidate model
# A candidate belongs to a job_opening
class Candidate < ApplicationRecord
  belongs_to :job_opening
  validates_uniqueness_of :first_name, scope: [:last_name]
  scope :job_candidates, -> (id) { where(job_opening_id: id) }
end
