const requestHandler = (req, res) => {
    const url = req.url;
    const methodType = req.method;
    console.log('inside routing');
    if( url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Node Assignment</title></head>');
        res.write('<body><form action="/createUser" method="POST"><input type="text" name="userName"/><button type="submit">Add User</button></form></body>')
        res.write('</html>');

        return res.end();
    }

    if(url === '/createUser' && methodType === 'POST') {
        console.log("trying to create user");
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            
            const parsedRequestBody = Buffer.concat(body).toString();
            console.log(parsedRequestBody);
            const userName = parsedRequestBody.split('=')[1];

            console.log(userName);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Node Assignment Users List</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>');

        return res.end();
    }
};

module.exports = requestHandler;