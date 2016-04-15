Following the Angular2 quickstart Tutorial at https://angular.io/docs/ts/latest/
                                              quickstart.html.

Angular2 supports Typescript. To use it, a tsconfig.json file which guides the 
compiler to generate JavaScript.

For extended JavaScript libraries the typings.json file tells the compiler about
these libraries. The tsconfig.json will run the typings tool after npm 
installation is complete and installs the d.ts files found in typings.json. Is
this tutorial only one is installed.

The packages.json file is for the npm which acquires and manages the development
libraries. The file contains scripts which inlude tsc (runs TypeScript compiler 
once), tsc:w (runs TypeScript compiler in watch mode), and lite(runs 
lite-server). The command npm install installs these packages.

The Component is the most fundamental of Angular concepts. A component manages a
view - a piece of the web page where we display information to the user and 
respond to user feedback. It is technically a class that controls the view 
template.

The app folder will hold the components files.
The app.component.ts file contains:
  The AppComponent class, which is located at the bottom and empty for this 
    tutorial. The act of exporting turns the file into a module. Angular is also
    modular and the file imports the Angular component function at the 
    top of the file.
  Above the class is the componet function of angular is applied with a 
  decorator which is prefixed with @ which contains the selector and template 
  fields.
    This selector property specifies a simple CSS selector for the host element 
    my-app.
    The template property holds the component's companion template which tells
    angular how to render the view.
    
The main.ts file contains:
  The imports of the Angular's browser bootstrap function and the app's root
  component from the app.component file just written. The bootstrap function is
  then called from the import and the AppComponent is pass through it.
  
The index.html file is created in the project root folder. It contains:
  Javascript libraries needed.
  Configure the "System" to import main.ts file.
  The <my-app> tag in the <body> which is targeted by the selector from 
  app.component.
  
********************************************************************************
