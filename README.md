



# cors - cross origin - solution
## happens when ports are different

## install cors, add cors in backend, app.use(cors())

## or

## whitelisting of domain / IP

## or

## backend url - http://localhost:3000/api/jokes

## frontend url - http://localhost:5173/

## now use proxy (in vite+react)
## 1- open vite.config.js file
## 2- add following in defineConfig({})

```
server:{
    proxy:{
'/api/: "http://localhost:3000',
    },
},

```



# production build (bad practice)

## run 'npm run build' in frontend folder
## it will give you a dist folder which contains the whole code
## move dist folder into backend code
## add following in backend code
```
app.use(express.static('dist));
```
## problem - frontend changes don't propagate to the dist folder, will have to run build command every time







