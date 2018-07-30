## Welcome to Smile!
Smile is a social network built with Node.js using a Postrgres database that allows users to collect, like and share quotes.

To start the app you'll need to install a few things and initialize the database. Lets start with the app itself which is located at:
$ git clone https://github.com/jnware7/Smile.git

Next we'll add the dependencies: <br>
`$ npm i `

After everything has been installed you'll need to initialize your database luckily we've written a script for that:<br>
`$ npm run db:create`

Now to load the schema:<br>
`$ npm run load_schema`

You can reset the database if need be with:<br>
`$ npm run db:reset`

Next you'll want to get your server started:<br>
`$ npm start`

And finally open a browser and navigate to http://localhost:3000

<img width="1275" alt="screen shot 2018-01-24 at 1 48 27 pm" src="https://user-images.githubusercontent.com/20915359/35359103-af5d02c6-010d-11e8-9044-b79456915f6d.png">





