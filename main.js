var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData= url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
              var title = 'Welcome';
              var description = 'Hello, Node.js';
              var template = `
              <!doctype html>
          <html>
              <head>
                  <title>web1 - ${title}</title>
                  <meta charset="utf-8">
                  <link rel="stylesheet" href="http://localhost/web/style.css">
                  <!-- Global site tag (gtag.js) - Google Analytics -->
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4M1NXKPG6D"></script>
                  <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
          
                  gtag('config', 'G-4M1NXKPG6D');
                  </script>
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                  <script src="http://localhost/web/colors.js"></script>
                  <script src=https://cdn.jsdelivr.net/npm/promise-polyfill@8.1/dist/polyfill.min.js></script>
                  <script src=https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0/dist/fetch.umd.min.js></script>
              </head>
              <body>
              <a href="https://naver.com" target="_blank" title="naver.com">naver</a>
          
          
              <h1><a href="/">Index Page</a></h1>
          
              <input type="button" value="night" onclick="nightDayHandler(this);">
          
              <div id="grid">
                  <ol id="nav">
                  </ol>
                  <article>${description}</article>
              </div>
              <script>
                  var items = ['article_naruto', 'article_minsoo', 'article_iamyourman', 'article_emart'];
                  var i = 0;
                  var tags = '';
                  while (i<items.length) {
                      var item  = items[i];
                      var tag = '<li><a href="/?id='+item+'">'+item+'</a></li>';
                      tags = tags + tag;
                      i++;
                  }
                  console.log(document.querySelector('#nav'));
                  document.querySelector('#nav').innerHTML = tags;
              </script>
              </body>
          </html>
              `;
              response.writeHead(200);
              response.end(template);
            })
        } else {
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var template = `
            <!doctype html>
        <html>
            <head>
                <title>web1 - ${title}</title>
                <meta charset="utf-8">
                <link rel="stylesheet" href="http://localhost/web/style.css">
                <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4M1NXKPG6D"></script>
                <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-4M1NXKPG6D');
                </script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="http://localhost/web/colors.js"></script>
                <script src=https://cdn.jsdelivr.net/npm/promise-polyfill@8.1/dist/polyfill.min.js></script>
                <script src=https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0/dist/fetch.umd.min.js></script>
            </head>
            <body>
            <a href="https://naver.com" target="_blank" title="naver.com">naver</a>
        
        
            <h1><a href="/">Index Page</a></h1>
        
            <input type="button" value="night" onclick="nightDayHandler(this);">
        
            <div id="grid">
                <ol id="nav">
                </ol>
                <article>${description}</article>
            </div>
            <script>
                var items = ['article_naruto', 'article_minsoo', 'article_iamyourman', 'article_emart'];
                var i = 0;
                var tags = '';
                while (i<items.length) {
                    var item  = items[i];
                    var tag = '<li><a href="/?id='+item+'">'+item+'</a></li>';
                    tags = tags + tag;
                    i++;
                }
                console.log(document.querySelector('#nav'));
                document.querySelector('#nav').innerHTML = tags;
            </script>
            </body>
        </html>
            `;
            response.writeHead(200);
            response.end(template);
            })
        }
    } else {
        response.writeHead(404);
        response.end('Not found');
    }


});
app.listen(3000);