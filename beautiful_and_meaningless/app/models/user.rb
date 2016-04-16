class User < ActiveRecord::Base
  has_secure_password

  has_many :quotes
  has_many :images

  validates :email, presence: true
  validates :username, presence: true, uniqueness: true


end
