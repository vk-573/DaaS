# DaaS
A Vue application abouts dogs

## How to run 
```bash
cd doggos
npm install
npm run dev
```

## Main 3 features:

### Discover
You can browse dog breeds and sub-breeds pictures
During your browsing you can like or unlike a picture

### Favorites
You can see all your bookmarked pictures and unlike them by clicking on a picture.
Your "hearth" will also disapear from Discovery view.

### History
Every pictures that you sew durng your discovery, will be saved in your history.
If you see a picture that is already in your history, the picture will not be added as a doublon but will be replaced in the stack.

## A More technical view
I've used Vue 3.
In order to manage the global state I've used the Vue native Composition API, it apperead to me as the most simple and lightweight state management solution for this project needs.
More precisely I used the reactive and toRefs methods.

## Tree
src/components => globals components

src/services => business logic / network related functions

src/sessions => global states

## More features
Some ideas that can be implemented
* Save your liked pictures and history to the localStorage when the application closes, retrieve them back in the state on the applicatio opening.
* Add breed names on your liked pictures / history
* Make sidebar menu for breed list instead of a select
