var userQueryMap = {
    'login': `SELECT * FROM users WHERE username = :username AND password = :password`,
    'listUsers': `SELECT * FROM users`
};

class userQueryFactory {
    getQuery(queryId, values) {
        let query = userQueryMap[queryId];
        if (values) {
            Object.keys(values).forEach((key) => {
                query = query.replace(new RegExp(`:${key}`, 'g'), `'${values[key]}'`);
            });
        }
        return query;
    }
}

module.exports = new userQueryFactory();
