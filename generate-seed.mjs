import bcrypt from 'bcryptjs';

const hash = bcrypt.hashSync('admin123', 10);
const sql = `
INSERT INTO \`user\` (\`id\`, \`username\`, \`email\`, \`name\`, \`password\`, \`role\`, \`created_at\`, \`updated_at\`)
VALUES ('admin_seed_id', 'admin', 'admin@system.local', 'Super Admin', '${hash}', 'admin', strftime('%s', 'now'), strftime('%s', 'now'));
`;
console.log(sql);
