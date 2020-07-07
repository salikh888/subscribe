// import * as http from 'http';
//
// const port = 3000;
//
// const requestHandler = (request, response) => {
//     console.log(request.url)
//     response.end('Hello Node.js Server!')
// };
// const server = http.createServer(requestHandler);
//
// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// })

// import { request } from 'http';
import * as http from 'http';

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay');
});
// export const req = request(
//     {
//         host: 'localhost',
//         port: '5000',
//         path: '/posts',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     },
//     response => {
//         console.log(response.statusCode); // 200
//     }
// );
//
// req.write(JSON.stringify({
//     author: 'Marcin',
//     title: 'Lorem ipsum',
//     content: 'Dolor sit amet'
// }));
//
// req.end();