module.exports = ({ env }) => ({
    url: env("https://level-up-engineering-uat.herokuapp.com/"),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["HOST", "PORT", "APP_KEYS", "JWT_SECRET", "API_TOKEN_SALT"]),
    },
});
