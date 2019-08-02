require 'test_helper'
require 'spec_helper'
require 'rails_helper'

RSpec.describe Api::V1::CandidatesController do
  before(:each) do
    set_up_test
  end

  describe 'GET index' do
    it "render @candidates" do
      get :index
      expect(response).to have_http_status 200
      parsed_body = JSON.parse(response.body)
      expect(parsed_body['candidates'].size).to eq(@candidates.as_json.size)
    end
  end

  describe "GET index with job_id query_string" do
    it "render @candidates" do
      get :index, params: { job_id: @sale.id }
      expect(response).to have_http_status 200
      parsed_body = JSON.parse(response.body)
      expect(parsed_body['candidates'].size).to eq(1)
    end
  end

  describe "PUT update/:id" do
    it "update candidate" do
      put :update, params: { id: @will.id }, body: { category: 'waiting' }
      @will.reload
      expect(@will.category).to eq('waiting')
    end
  end
end