module TestHelper

  def set_up_test
    @account_manager = JobOpening.find_or_create_by(title: 'Account Manager')
    params = {  
      first_name: 'Will', last_name: 'Arnett',
      category: 'waiting', job_name: 'Actor',
      approval_count: 2, job_opening_id: @account_manager.id, 
      avatar_link: '' 
    }
    @will = Candidate.find_or_create_by(params)
    @sale = JobOpening.find_or_create_by(title: 'Sale')
    params = {  
      first_name: 'Jennifer', last_name: 'Lopez',
      category: 'waiting', job_name: 'Singer',
      approval_count: 2, job_opening_id: @sale.id, 
      avatar_link: '' 
    }
    @jlo = Candidate.find_or_create_by(params)
    @candidates = Candidate.all
    @jobs = JobOpening.all
  end


end