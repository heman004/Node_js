const http = require("http");

const server = http.createServer( ( req, res ) => {

    res.writeHead( 200, { "Content-Type": "text/html" } );

    res.end( ` 
        <html>
           <head> 
               <title> Movie Booking </title> 
            </head> 
            <body> 
                <h2> Movie Booking </h2> 
                <button id="movie" style="padding: 8px 12px; background-color: black; color: white" > Click to book </button>
            </body> 

            <script>
                const movie = document.getElementById("movie");
                movie.addEventListener( "click", () => {
                        alert("Loading.....")
                    } )
            </script> 
        </html>`  )

} )

const port = 3000;

server.listen( port, () => {

    console.log( `Server is running at http://localhost:${port}` )

} )