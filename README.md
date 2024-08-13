# backend-api-assignment

# API Endpoints

## User Endpoints

### Signup

- **Endpoint:** `POST ` `/api/signup`
- **Request Body:**

  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

### Login

- **Endpoint:** `POST ` `/api/login`
- **Request Body:**

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### Logout

- **Endpoint:** `POST ` `/api/logout`
- **Request Body: None**

## Folder Endpoints

### Create Folder

- **Endpoint:** `POST ` `/api/folders`
- **Request Body:**

  ```json
  {
    "name": "string",
    "parent": "string" // Optional, ObjectId of parent folder
  }
  ```

### Get All Folders

- **Endpoint:** `GET ` `/api/folders`
- **Request Body: None**

### Get Folder By Id

- **Endpoint:** `GET ` `/api/folders/:id`
- **URL Parameter:** `id:` `ObjectId of the folder`

### Update Folder

- **Endpoint:** `PUT ` `/api/folders/:id`
- **Request body:**

```json
{
  "name": "string",
  "parent": "string" // Optional, ObjectId of parent folder
}
```

### Delete Folder

- **Endpoint:** `DELETE ` `/api/folders/:id`

- **URL Parameter:** `id:` `ObjectId of the folder`

## Image Endpoints

### Upload Image

- **Endpoint:** `POST ` `/api/images`

- **Request Body:**

- `name`: String
- `image`: File (image file to be uploaded)

### Get All Images

- **Endpoint:** `GET ` `/api/images`
- **Request Body: None**

## Get Image by Id

- **Endpoint:** `GET ` `/api/images/:id`

- **URL Parameter:** `id:` `ObjectId of the image`

## Update Image

- **Endpoint:** `PUT ` `/api/images/:id`

- **Request Body:**

  ```json
  {
    "name": "string"
    // Optional: Image file if updating the image itself
  }
  ```

  ## Delete Image

- **Endpoint:** `DELETE ` `/api/images/:id`
- **URL Parameter:** `id:` `ObjectId of the image`

## Search Endpoints

## Search Images

- **Endpoint:** `GET ` `/api/images/search`

- **Query Parameters:** `name:` `String to search for name`
