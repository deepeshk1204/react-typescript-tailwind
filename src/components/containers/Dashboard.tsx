import React from "react"

const Dashboard: React.FC = () => (
  <div className="container pt-12 md:pt-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <div className="flex flex-col w-full xl:w-4/5 justify-center lg:items-start overflow-y-hidden">
      <h1 className="my-4 text-2xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
        Starter kit for React TypeScript Tailwind CSS
      </h1>
      <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          <li>Webpack 4</li> 
          <li>Babel - 7</li> 
          <li>Typescript - 3.8</li> 
          <li>Babel-loader - 8</li> 
          <li>Prettier - 2.0</li> 
          <li>eslint -6.8</li> 
          <li>eslint-plugin-react - 7</li> 
          <li>react - 16.13</li> 
          <li>react-router-dom - 5.1-</li> 
          <li>autoprefixer - 9.7</li> 
          <li>webfontloader - 1.6</li> 
          <li>Tailwind css</li> 
      </p>
    </div>
  </div>
)

export default Dashboard
