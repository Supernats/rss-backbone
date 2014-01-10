class User < ActiveRecord::Base
  attr_accessible :password_digest, :session_token, :username

  before_validation :ensure_session_token

  validates :username, :session_token, :presence => true
  validates :password, :length => { :minimum => 6 }

  def self.find_by_credentials(username, plaintext)
    user = User.find_by_username(username)
    user if user && user.is_password(plaintext)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(plaintext)
    self.password_digest = BCrypt::Password.create(plaintext)
  end

  def is_password?(plaintext)
    BCrypt::Password.new(self.password_digest).is_password?(plaintext)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end