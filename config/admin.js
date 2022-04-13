module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0bbc0a4e3ca6778aa9cb225265a75ca7'),
  },
});
