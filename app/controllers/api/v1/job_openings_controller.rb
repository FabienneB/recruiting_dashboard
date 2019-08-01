# frozen_string_literal: true

# Controller for job_openings
class Api::V1::JobOpeningsController < ApplicationController
  def index
    job_openings = JobOpening.all
    render(json: { job_openings: job_openings }, status: 200)
  end
end
