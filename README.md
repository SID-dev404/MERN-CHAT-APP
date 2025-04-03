# MERN-CHAT-APP

Real time chat application using MERN, Cloudinary , Tailwind CSS ( postCSS and autoPrefixer ) , socket.io and daisyUI.

![Demo App](/frontend/public/demo.png)

## Requirements 

MongoDB Account (For the MongoDB URI)

Cloudinary Account (For the API and Secret Key)

Json Web Token

## Usage

```
git clone https://github.com/SID-dev404/MERN-CHAT-APP.git

cd MERN-CHAT-APP
```
## .ENV Setup
```
MONGODB_URI = YOUR_MONGODB_URI

PORT = 5001

JWT_SECRET = PUT_ANY_STRING 

CLOUDINARY_CLOUD_NAME = YOUR_CLOUDINARY_NAME

CLOUDINARY_API_KEY = YOUR_CLOUDINARY_API

CLOUDINARY_API_SECRET = YOUR_CLOUDINARY_SECRET 

NODE_ENV = development
```

## Make sure the backend is running first
```
cd backend 

npm i

npm run dev
```
## Now run the frontend
```
cd frontend

npm i

npm run dev
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
