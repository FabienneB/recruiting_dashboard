require 'test_helper'
require 'spec_helper'
require 'rails_helper'

RSpec.describe JobOpening, :type => :model do
  it "is valid with a unique title " do
    expect(JobOpening.new(title: 'Office manager')).to be_valid
    expect(JobOpening.new).not_to be_valid
    JobOpening.create(title: 'Office manager')
    expect(JobOpening.create(title: 'Office manager')).not_to be_valid
  end
end