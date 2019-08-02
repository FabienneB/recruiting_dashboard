require 'test_helper'
require 'spec_helper'
require 'rails_helper'

RSpec.describe Candidate, :type => :model do
  before(:each) do
    set_up_test
  end

  it "is valid with valid params " do
    params = {  
              first_name: 'Stevy', last_name: 'Jobs',
              category: 'waiting', job_name: 'Apple productor',
              job_opening_id: @account_manager.id 
            }
    expect(Candidate.new(params)).to be_valid
    expect(Candidate.new).not_to be_valid
  end
end