-- Custom migration to seed the initial admin user

-- Delete existing admin if any to avoid conflicts
DELETE FROM `user` WHERE `email` = 'admin@system.local' OR `username` = 'admin';

-- Insert Admin User
INSERT INTO `user` (`id`, `name`, `email`, `email_verified`, `username`, `created_at`, `updated_at`) 
VALUES (
  'admin_seed_id', 
  'Super Admin', 
  'admin@system.local', 
  1, 
  'admin', 
  CAST(strftime('%s', 'now') AS INTEGER), 
  CAST(strftime('%s', 'now') AS INTEGER)
);

-- Insert Admin Account (for username/password login)
-- The password hash below corresponds to 'admin123'
INSERT INTO `account` (`id`, `account_id`, `provider_id`, `user_id`, `password`, `created_at`, `updated_at`) 
VALUES (
  'admin_account_id', 
  'admin', 
  'credential', 
  'admin_seed_id', 
  '11003649ad7f1ee4781dc1e58610d5d9:c2c3560f21d26aac11e1bc853d0db6cccf53df05fcfaa1c9aaf8c5e513e8c32c0b1e14bb32b36f6dec2f6c7b8b66a240a79fd2f9d7580ebf106c1098fd4642df', 
  CAST(strftime('%s', 'now') AS INTEGER), 
  CAST(strftime('%s', 'now') AS INTEGER)
);
