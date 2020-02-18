define({ "api": [
  {
    "type": "get",
    "url": "/api/users",
    "title": "Gets all users",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "Users",
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://staging-lambda-synaps-be.herokuapp.com/',\n        timeout: 1000,\n});\nrequest.get('/api/users');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "User Data",
          "content": "\n[  {\n       \"user_id\": 1,\n       \"first_name\": \"Jeremiah\",\n       \"last_name\": \"Tenbrink\",\n       \"uid\": \"12345\",\n       \"username\": \"Jeremiah Tenbrink\",\n       \"created_at\": \"2020-02-18 14:10:08.566262-07\",\n       \"updated_at\": \"2020-02-18 14:10:08.566262-07\"\n   },\n{\n       \"user_id\": 5,\n       \"first_name\": \"Jeremiah\",\n       \"last_name\": \"Tenbrink\",\n       \"uid\": \"someothersui\",\n       \"username\": \"Jeremiah\",\n       \"created_at\": \"2020-02-18 14:12:47.906184-07\",\n       \"updated_at\": \"2020-02-18 14:12:47.906184-07\"\n   }, ...\n\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users/users-router.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:5000/api/users"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Create a new user.",
    "version": "1.0.0",
    "name": "GetAllUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Users first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Users last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Users google UID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'https://staging-lambda-synaps-be.herokuapp.com/',\n        timeout: 1000,\n});\nrequest.post('/api/users', {\n   first_name: \"Jeremiah\",\n   last_name: \"Tenbrink\",\n   uid: \"1kdhio39578sil;\",\n   username: \"Jeremiah Tenbrink\"\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "User Data",
          "content": "\n {\n    \"user_id\": 10,\n    \"first_name\": \"Jeremiah\",\n    \"last_name\": \"Tenbrink\",\n    \"uid\": \"someothersuisomethingfdafdadfadfsdadfda\",\n    \"username\": \"Jeremiah343223656654\",\n    \"created_at\": \"2020-02-18 14:15:20.463231-07\",\n    \"updated_at\": \"2020-02-18 14:15:20.463231-07\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users/users-router.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:5000/api/users"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });