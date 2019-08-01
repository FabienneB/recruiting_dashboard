# frozen_string_literal: true

# Controller for candidates
class Api::V1::CandidatesController < ApplicationController
  before_action :set_candidate, only: [:update]
  skip_before_action :verify_authenticity_token, only: [:update]

  def index
    job_id = params['job_id']
    candidates = (job_id && !job_id.empty?) ? Candidate.job_candidates(job_id) : Candidate.all
    render(json: { candidates: candidates }, status: 200)
  end

  def update
    begin
      if @candidate.update(candidate_params)
        render json: { candidate: @candidate } and return
      else
        render(json: { error: @candidate.errors[:base] }, status: 422) and return
      end
    rescue => e
      render json: { error: e }, status: 422
    end
  end

  private

  def candidate_params
    params.require(:candidate).permit(:category)
  end

  def set_candidate
    @candidate = Candidate.find(params[:id])
  end
end