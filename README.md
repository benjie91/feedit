# Feedit
Feedit provides a platform for developers to send feedback of their system to it. It will then
consolidates all the feedback and present the data through a dashboard. Before the feedback can
be sent over to feedit, the system has to be first registered with feedit. 

![](images/1%20First%20view.png)
![](images/2%20System%20Registration.png)
![](images/3%20Dashboard%20Default.png)
![](images/4%20Dashboard%20RGL.png)
![](images/5%20Dashboard%20Filter.png)
![](images/6%20data%20grid%20filter.png)
![](images/7%20Draggable.png)
![](images/8%20Dashboard%20RGL%20resizable.png)
![](images/9%20Dashboard%20Reset%20Layout.png)
![](images/10%20data%20grid%20sequence.png)
![](images/11%20Chart%20hover.png)


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
