/**
 * Created by dummy team
 * 2017-09-01
 */

require('../poem/configuration/constants');
var Enums = require('../constants/enums');
var enums = new Enums();

exports.setupEnvironment = function () {
    var env = process.env.NODE_ENV || 'development';
    ENV = env;
    if (undefined === typeof env || null === env || "" === env || enums.APP_DEVELOPMENT_MODE === env) {
        LISTEN_PORT = "8080";
        MONGO_DB_SERVER_ADDRESS = "127.0.0.1";
        MONGO_DB_SERVER_PORT = "27017";
        MONGO_DB_NAME = "dummy_game";
        MONGO_DB_USER = 'admin';
        MONGO_DB_PASSWORD = '123456';
        REDIS_HOST = "127.0.0.1";
        REDIS_PORT = "6379";
        REDIS_PASSWORD = null;
        SMS_ACCESSKEY_ID = "";
        SMS_ACCESSKEY_SEC = "";
        SMS_SIGN_NAME = "";
        MULTIPLE_INSTANCE = 20;
        BASE_PORT = 9000;
        MATCH_SERVER_PORT = 8081;
    } else if (enums.APP_PRODUCTION_MODE === env) {
        LISTEN_PORT = "8080";
        MONGO_DB_SERVER_ADDRESS = "127.0.0.1";
        MONGO_DB_SERVER_PORT = "27017";
        MONGO_DB_NAME = "dummy_game";
        MONGO_DB_USER = 'admin';
        MONGO_DB_PASSWORD = '123456';
        REDIS_HOST = "127.0.0.1";
        REDIS_PORT = "6379";
        REDIS_PASSWORD = null;
        SMS_ACCESSKEY_ID = "";
        SMS_ACCESSKEY_SEC = "";
        SMS_SIGN_NAME = "";
        MULTIPLE_INSTANCE = 20;
        BASE_PORT = 9000;
        MATCH_SERVER_PORT = 8081;
    } else if (enums.APP_USERDEBUG_MODE === env) {
        LISTEN_PORT = "8080";
        MONGO_DB_SERVER_ADDRESS = "127.0.0.1";
        MONGO_DB_SERVER_PORT = "27017";
        MONGO_DB_NAME = "dummy_game";
        MONGO_DB_USER = 'admin';
        MONGO_DB_PASSWORD = '123456';
        REDIS_HOST = "127.0.0.1";
        REDIS_PORT = "6379";
        REDIS_PASSWORD = null;
        SMS_ACCESSKEY_ID = "";
        SMS_ACCESSKEY_SEC = "";
        SMS_SIGN_NAME = "";
        MULTIPLE_INSTANCE = 20;
        BASE_PORT = 9000;
        MATCH_SERVER_PORT = 8081;
    }
};
