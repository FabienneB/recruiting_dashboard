require 'test_helper'
require 'spec_helper'
require 'rails_helper'

RSpec.describe Api::V1::JobOpeningsController do
  before(:each) do
    set_up_test
  end

  describe 'GET index' do
    it "render @job_openings" do
      get :index
      expect(response).to have_http_status 200
      parsed_body = JSON.parse(response.body)
      expect(parsed_body['job_openings'].size).to eq(@jobs.as_json.size)
    end
  end
end