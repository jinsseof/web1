

module.exports = {
    html:function(title, list, body, control){
        return `
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
                ${list}
                ${control}
                ${body}
            </div>
            </body>
        </html>
        `;
    },
    list:function(filelist){
        var list = `<ol>`;
        var i = 0;
        while (i < filelist.length) {
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i++;
        }
        list = list + `</ol>`;
        return list;
    }
}
