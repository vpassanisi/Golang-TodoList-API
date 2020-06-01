This is a React template using Create React App and Tailwindcss

Learn more about those projects here:
[Create React App](https://github.com/facebook/create-react-app)
[tailwindcss](https://tailwindcss.com/)

This is a pretty basic template and I removed a lot of things included in create react app by default.
It is really inteded as a starting point for more basic react websites.

Tailwind is run as a Postcss plugin. This makes it easier to add other plugins like autoprefixer and purgecss.
In this case purgecss is very important because I have changed the default tailwind color palette to match
the material design color palette. You can modify the color palette in the maerialPalette.js file.
Also, I inlcuded a package called tailwindcss-bg-alpha which generates background color classes with alpha values.
By default the only colors to have alpha values is black, white, and deep-purple. You can add any color you want to generate alpha colors
for in the tailwind.config.js file. In the alphaColors key you need to format the colors like "blue-gray.500", "amber.300", "light-blue.700".
