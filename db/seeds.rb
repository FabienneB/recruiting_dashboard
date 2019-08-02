# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

account_manager = JobOpening.find_or_create_by(title: 'Account Manager')
params = {  first_name: 'Steve', last_name: 'Jobs',
            category: 'waiting', job_name: 'Apple productor',
            approval_count: 5, job_opening_id: account_manager.id,
            avatar_link: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80' }
Candidate.find_or_create_by(params)
params = {  first_name: 'Elon', last_name: 'Musk',
            category: 'interview', job_name: 'Innovator',
            approval_count: 7, job_opening_id: account_manager.id,
            avatar_link: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80' }
Candidate.find_or_create_by(params)
data_analyst = JobOpening.find_or_create_by(title: 'Data Analyst')
params = {  first_name: 'Beyonce', last_name: 'Knowles',
  category: 'waiting', job_name: 'Singer',
  approval_count: 7, job_opening_id: data_analyst.id,
  avatar_link: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80' }
Candidate.find_or_create_by(params)
