<div id="top"> </div>

[![Feedback Widget](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://feedback-widget-web-rosy.vercel.app/)

<!---- PROJECT LOGO ----> 
<div align="center">

  <h2 align="center"> 
    Event Platform - Ignite Lab 
  </h2>
  
  <p align="center">
    Platform to watch video classes, developed with React and GraphQL. <br/>
    Explore <a href="https://reactjs.org/docs/getting-started.html">React</a> or <a href="https://graphql.org/learn/">GraphQL</a> docs &#187; <br/> <br/>
    <a href="https://ignite-lab-sigma-drab.vercel.app/"> View Demo Project </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/event-platform/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/event-platform/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
      </ul>
    </li>
    <li><a href="#usage"> Usage </a></li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project

<div align="center">
  <img src="https://user-images.githubusercontent.com/44311634/181088132-a5620217-2b20-4460-a05a-cad3645e9507.gif" align="center" height="640" alt="Project Home Page">
  <br/> <br/> 
</div>
A platform where students can sign up to watch available classes. The administrator can create new classes and define the dates on which they are available. The name and email of all subscribers are saved.


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/"> 
      <img align="center" alt="Icon-TypeScript" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Vite --> 
    <a href="https://vitejs.dev/"> 
      <img align="center" alt="Icon-Vite" height="35" src="https://user-images.githubusercontent.com/44311634/178621448-92a00500-f7b2-4764-a109-9cdf4221abd7.svg"> 
    </a> &nbsp;
    <!-- Icon React -->
    <a href="https://reactjs.org/"> 
      <img align="center" alt="Icon-React" height="35" src="https://user-images.githubusercontent.com/44311634/178088844-02a9c9ba-28b9-4ef6-87f0-d12d52ceaf0b.png"> 
    </a> &nbsp;
    <!-- Icon Tailwindcss --> 
    <a href="https://tailwindcss.com/"> 
      <img align="center" alt="Icon-Talwindcss" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"> 
    </a> &nbsp;
    <!-- Icon Apollo --> 
    <a href="https://www.apollographql.com/"> 
      <img align="center" alt="Icon-Talwindcss" height="35" src="https://user-images.githubusercontent.com/44311634/179635711-e87c00b6-ed09-468a-a649-09950ac0b4bd.png"> 
    </a> &nbsp;
    <!-- Icon GraphQL -->
    <a href="https://graphql.org/"> 
      <img align="center" alt="Icon-Axios" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"> 
    </a>
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 16+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. 


### Prerequisites 

First of all, we need to create the application backend, for that, you will need to create an account in <a href="https://app.hygraph.com/">Hygraph</a>. After creating an account, let's clone my hygraph project by <strong>clicking</strong> the button below. The clone process may take a few minutes. 

* Clone the project

   [![Clone project](https://hygraph.com/button)](https://app.hygraph.com/clone/670db236bb1f499895907b7caec6c641?name=Ignite%20Lab%20-%20%40vihugoos)  



### Installation 

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/event-platform.git
   ```
2. Inside the project root directory install all project dependencies 
   ```cmd
   npm install --force
   ```
3. In your hygraph project, in <strong>Settings > API Access</strong>, copy the <strong>Content API URL</strong>
   <br/><br/>
   <div align="center">
    <img align="center" alt="Content-API" src="https://user-images.githubusercontent.com/44311634/179856179-d93c0334-44e2-4437-8d06-6fe24ffa85f2.jpg"> 
   </div>
   <br/>
4. Create an `.env.local` file with your Content API URL (<i>don't forget to change the value of the variable</i>) 
   ```cmd
   echo "VITE_API_URL='yourContentAPIURL'" > .env.local
   ```
5. In <strong>Settings > API Access > Permanent Auth Tokens</strong>, copy the auto-generated token  
   <br/> 
   <div align="center">
    <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/179865655-e8785015-f3ac-451f-b8b6-82106b9ed7fa.jpg"> 
   </div>
   <br/>
6. Include in the `.env.local` the auth token (<i>don't forget to change the value of the variable</i>) 
   ```cmd
   echo "VITE_API_ACCESS_TOKEN='yourAuthToken'" >> .env.local
   ```


<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can start the project.

* Starting the project 
   ```bash
   npm run dev
   ```

Creating a new lesson to be displayed in the <strong>'Class schedule'</strong> tab.

1. In your hygraph project, in <strong>Content > Lesson </strong>, click on <strong>'Create entry'</strong>
   <br/> 
   <div align="center">
    <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/181104978-ad9ed695-285e-46c4-9b5c-a172dd2ff8cc.jpg"> 
   </div>
   <br/>
2. Please fill in at least all fields marked <strong>'Required'</strong>, after that click on <strong>'Save & publish'</strong>
   <br/> 
   <div align="center">
    <figure>
      <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/181104827-04d0dd2d-9258-4178-9cf8-9b397a6ea1d5.jpg"> 
      <br/><br/>
      
      <figcaption>
        <strong>WARNING:</strong> In the <strong>'Video ID'</strong> field, below is an example of how to capture just the ID, without the other URL parameters, that is, it starts from 'v=' to the next character '&'.                </figcaption>
      <br/><br/>
      
      <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/181107312-68a2b34f-4732-451d-b736-aa9e8300aefb.jpg"> 
    </figure>
   </div>
   <br/>
3. Click <strong>'Save & Publish'</strong> again to finish creating 
   <br/> 
   <div align="center">
    <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/181109128-c3fce4c6-d8ae-40e6-b1d0-7be812c9ed8e.jpg"> 
   </div>
   <br/><br/>


<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<br/> <br/> 


<!---- CONTACT ----> 
## Contact

Developer @vihugoos - victorhugoos@live.com 

<p align="right"><a href="#top"> &#129045; back to top </a></p> 
