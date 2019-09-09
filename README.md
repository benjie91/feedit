# Feedit
Feedit provides a platform for developers to send feedback of their system to it. It will then
consolidates all the feedback and present the data through a dashboard. Before the feedback can
be sent over to feedit, the system has to be first registered with feedit. 

## System Interface to Feedit
Post Request - http://server-name:17012/feedback/create
```json
{
  "systemId": "App01",
  "timestamp": "08/09/2019 15:22",
  "userId": "12345",
  "userGroup": "Department A",
  "feedback": "The system is not easy to use.",
  "feedbackTarget": "Generic"
}
```

## Tech Stack
Feedit is powered by Spring Boot for the backend server. The dashboard is built using React library.
